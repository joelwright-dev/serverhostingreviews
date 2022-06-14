import { Button, Center, NumberInput, JsonInput, TextInput, Textarea, Group, Tabs, Card } from '@mantine/core'
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
            stars: 0,
            colors: [],
            body: [],
            banner: [],
            href: ''
        },
    });

    const post = async (review) => {
        try {
            await fetch('/api/post', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(review)
            })
            await Router.push('reviews')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <form onSubmit={form.onSubmit((values) => {
            const review = {
                title: values.title,
                button: values.button,
                description: values.description,
                stars: values.stars,
                colors: JSON.parse(values.colors),
                body: JSON.parse(values.body),
                banner: JSON.parse(values.banner),
                href: values.href
            }
            
            post(review)
        })}>
            <Group direction="column" grow>
                <Group grow>
                    <TextInput placeholder="Title" label="Title" required {...form.getInputProps('title')}/>
                    <NumberInput defaultValue={0} label="Star Rating" required {...form.getInputProps('stars')} max={5} min={0}/>
                </Group>
                <Textarea placeholder="Description" label="Description" required {...form.getInputProps('description')}/>
                <TextInput placeholder="Button Text" label="Button Text" required {...form.getInputProps('button')}/>
                <JsonInput label="Colors" placeholder="[Color 1, Color 2]" validationError="Invalid JSON" formatOnBlur autosize minRows={1} required {...form.getInputProps('colors')}/>
                <JsonInput label="Body" placeholder="[[Type, Content]]" validationError="Invalid JSON" formatOnBlur autosize minRows={3} required {...form.getInputProps('body')}/>
                <JsonInput label="Banner" placeholder="[Affiliate Link, Image Source]" validationError="Invalid JSON" formatOnBlur autosize minRows={1} required {...form.getInputProps('banner')}/>
                <TextInput placeholder="href" label="Button Link" required {...form.getInputProps('href')}/>
                <Button type="submit" variant="gradient" gradient={{from: 'purple', to: 'pink', deg: 45}}>Upload Review (Draft)</Button>
            </Group>
        </form>
    )
}