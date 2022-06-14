import { Button, Center, TextInput, Textarea, Group, Tabs, Card } from '@mantine/core'
import { useForm } from '@mantine/form'
import { createHash } from 'crypto'
// import { PrismaClient } from '@prisma/client'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Home (props) {
    // useEffect(() => {
    //     fetch('api/user').then(
    //         (res) => res.json())
    //         .then((user) => {
    //             setAdmin(user)
    //             console.log(admin)
    //         }
    //     )
    // }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // const router = useRouter()

    // if(props.user !== 0) {
    //     router.push('/home')
    // }

    const form = useForm({
        initialValues: {
            title: '',
            button: '',
            description: '',
            colors: [],
            body: [],
            banner: [],
            href: ''
        },
    });

    const handleLogin = async (user) => {
        const authenticated = await axios.post('/api/auth/login', user)
        
        console.log(authenticated)

        if(authenticated.status == 200) {
            router.push('home')
        } else {
            console.log("something went wrong")
        }
    }

    return(
        <form onSubmit={form.onSubmit((values) => {
            const user = {
                student_id: values.id.replace('s',''),
                password: createHash('sha256').update(values.password).digest('hex')
            }

            if(students) {
                students.map((users) => {
                    if(users.student_id == user.student_id) {
                        if(users.password == user.password) {
                            const thisUser = {
                                id: user.student_id,
                                code: "",
                                firstname: users.firstname,
                                surname: users.surname,
                                isStudent: true,
                                isParent: false
                            }

                            console.log(thisUser)

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
                <TextInput placeholder="Title" label="Title" required {...form.getInputProps('title')}/>
                <Textarea placeholder="Description" label="Description" required {...form.getInputProps('description')}/>
                <TextInput placeholder="Button Text" label="Button Text" required {...form.getInputProps('button')}/>
                <Group grow>
                    <TextInput placeholder="Color 1" label="Color 1" required {...form.getInputProps('color1')}/>
                    <TextInput placeholder="Color 2" label="Color 2" required {...form.getInputProps('color2')}/>
                </Group>
                <Button type="submit" variant="gradient" gradient={{from: 'purple', to: 'pink', deg: 45}}>Login</Button>
            </Group>
        </form>
    )
}