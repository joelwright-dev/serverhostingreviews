import { Button, Center, TextInput, Group, Tabs, Card } from '@mantine/core'
import { useForm } from '@mantine/form'
import { createHash } from 'crypto'
// import { PrismaClient } from '@prisma/client'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home (props) {
    const [users, setUsers] = useState()
    const router = useRouter()

    useEffect(() => {
        fetch('api/users').then(
            (res) => res.json())
            .then((user) => {
                setUsers(user)
            }
        )
    }, [users]) // eslint-disable-line react-hooks/exhaustive-deps

    const form = useForm({
        initialValues: {
            username: '',
            password: ''
        },
    });

    const handleLogin = async (user) => {
        const authenticated = await axios.post('/api/auth/login', user)
        
        console.log(authenticated)

        if(authenticated.status == 200) {
            router.push('create')
        } else {
            console.log("something went wrong")
        }
    }

    return(
        <Center style={{ width: '100%', height:'100%' }}>
            <Card shadow="sm" p="lg">
                <form onSubmit={form.onSubmit((values) => {
                    const user = {
                        username: values.username,
                        password: createHash('sha256').update(values.password).digest('hex')
                    }

                    if(users) {
                        users.map((users) => {
                            if(users.username == user.username) {
                                if(users.password == user.password) {
                                    const thisUser = {
                                        id: users.id,
                                        username: user.username
                                    }
                                    handleLogin(thisUser)
                                } else {
                                    console.log("Incorrect password")
                                }
                            } else {
                                console.log("Don't authenticate")
                            }
                        })
                    }
                    
                    console.log(user)
                })}>
                    <Group direction="column" grow>
                        <TextInput placeholder="Username" label="Username" required {...form.getInputProps('username')}/>
                        <TextInput placeholder="Password" label="Password" type="password" required {...form.getInputProps('password')}></TextInput>
                        <Button type="submit" variant="gradient" gradient={{from: 'purple', to: 'pink', deg: 45}}>Login</Button>
                    </Group>
                </form>
            </Card>
        </Center>
    )
}