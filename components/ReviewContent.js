import React from 'react'
import { useState } from 'react'
import { Card, Grid, UnstyledButton, TextInput, Table, Switch, Affix, ThemeIcon, Space, Group, Blockquote, Text, Box, Title, Button, Image, BackgroundImage, Center } from '@mantine/core'
import { DeviceFloppy, Pencil, Check, X } from 'tabler-icons-react'
import Link from 'next/link'

export default function ReviewContent(props) {
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState('')
    const handleChange = event => {
        setValue(event.target.value)
    }
    const pageElement = props.pageElement
    const review = props.review
    const user = props.user

    const updateBody = async(changes) => {
        try {
            await fetch('localhost:3000/api/updatecontent', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({review,changes})
            })
            await router.push(`reviews/${review.id}`)
        } catch(error) {
            console.log(error)
        }
    }

    var changes = []

    return (
        pageElement[0] == "hero" ? (
            <>
                <Box sx={{ maxHeight: 300 }} mx="auto">
                    <BackgroundImage src={pageElement[1]} style={{height:'300px'}} radius={10}>
                        <Center style={{ width: '100%', height: '100%', padding: '50px', background: 'rgba(0,0,0,0.6)', borderRadius: 10 }}>
                            <Title order={1} align="center">
                                <Text
                                inherit
                                component="span"
                                align="center"
                                variant="gradient"
                                gradient={{ from: "purple", to: "pink", deg: 45 }}
                                weight={700}
                                style={{ fontFamily: 'Greycliff CF, sans-serif' }}
                                >
                                    {review.title}
                                </Text>
                            </Title>
                        </Center>
                    </BackgroundImage>
                </Box>
                <Space h="xl"/>
            </>
            ) : (
                pageElement[0] == "title" ? (
                    <>
                        <Group>
                            {
                            !editing ? (
                                value !== '' ? (
                                <Title order={3}>{value}</Title>
                                ) : (
                                <Title order={3}>{pageElement[1]}</Title>
                                )
                            ) : (
                                value !== '' ? (
                                <TextInput defaultValue={value} style={{ width: "calc(100% - 42px)" }} onChange={handleChange}/>
                                ) : (
                                <TextInput defaultValue={pageElement[1]} style={{ width: "calc(100% - 42px)" }} onChange={handleChange}/>
                                )
                            )
                            }
                            {
                            user !== 0 ? (
                                <UnstyledButton onClick={() => {
                                if(editing) {
                                    changes.push([pageElement[0], pageElement[1], value])
                                    updateBody(changes)
                                }

                                setEditing(!editing)
                                }}>
                                <ThemeIcon variant="gradient" gradient={{ from: 'purple', to: 'pink' }}>
                                    {
                                    !editing ? (
                                        <Pencil size={20}/>
                                    ) : (
                                        <DeviceFloppy size={20}/>
                                    )
                                    }
                                </ThemeIcon>
                                </UnstyledButton>
                            ) : (
                                <></>
                            )
                            }
                        </Group>
                        <Space h="md"/>
                    </>
                ) : (
                    pageElement[0] == "body" ? (
                        <>
                            <Group>
                                {
                                    !editing ? (
                                    value !== '' ? (
                                        <Text>{value}</Text>
                                    ) : (
                                        <Text>{pageElement[1]}</Text>
                                    )
                                    ) : (
                                    value !== '' ? (
                                        <TextInput defaultValue={value} style={{ width: "calc(100% - 42px)" }} onChange={handleChange}/>
                                    ) : (
                                        <TextInput defaultValue={pageElement[1]} style={{ width: "calc(100% - 42px)" }} onChange={handleChange}/>
                                    )
                                    )
                                }
                                {
                                    user !== 0 ? (
                                    <UnstyledButton onClick={() => {
                                        if(editing) {
                                        changes.push([pageElement[0], pageElement[1], value])
                                        updateBody(changes)
                                        }

                                        setEditing(!editing)
                                    }}>
                                        <ThemeIcon variant="gradient" gradient={{ from: 'purple', to: 'pink' }}>
                                        {
                                            !editing ? (
                                            <Pencil size={20}/>
                                            ) : (
                                            <DeviceFloppy size={20}/>
                                            )
                                        }
                                        </ThemeIcon>
                                    </UnstyledButton>
                                    ) : (
                                    <></>
                                    )
                                }
                            </Group>
                            <Space h="xl"/>
                        </>
                    ) : (
                    pageElement[0] == "reviews" ? (
                        <>
                            <Grid columns={pageElement[1].length*3}>
                                {pageElement[1].map((review, index) => {
                                    return (
                                        <Grid.Col span={3} key={index}>
                                            <Card shadow="sm" p="lg" style={{height:'100%'}}>
                                                <Blockquote cite={`– ${review[1]}`}>
                                                {review[0]}
                                                </Blockquote>
                                            </Card>
                                        </Grid.Col>
                                    )
                                })}
                            </Grid>
                            <Space h="xl"/>
                        </>
                    ) : (
                        pageElement[0] == "button" ? (
                            <Group>
                                {
                                !editing ? (
                                    value !== '' ? (
                                    <Button variant="gradient" gradient={{from: review.colors[0], to: review.colors[1], deg: 45}} style={{ marginTop: 14 }}>
                                        {value}
                                    </Button>
                                    ) : (
                                    <Button variant="gradient" gradient={{from: review.colors[0], to: review.colors[1], deg: 45}} style={{ marginTop: 14 }}>
                                        {review.button}
                                    </Button>
                                    )
                                ) : (
                                    value !== '' ? (
                                    <TextInput defaultValue={value} style={{ width: "calc(100% - 42px)" }} onChange={handleChange}/>
                                    ) : (
                                    <TextInput defaultValue={review.button} style={{ width: "calc(100% - 42px)" }} onChange={handleChange}/>
                                    )
                                )
                                }
                                {
                                user !== 0 ? (
                                    <UnstyledButton onClick={() => {
                                    if(editing) {
                                        changes.push([pageElement[0], review.button, value])
                                        updateBody(changes)
                                    }

                                    setEditing(!editing)
                                    }}>
                                    <ThemeIcon variant="gradient" gradient={{ from: 'purple', to: 'pink' }}>
                                        {
                                        !editing ? (
                                            <Pencil size={20}/>
                                        ) : (
                                            <DeviceFloppy size={20}/>
                                        )
                                        }
                                    </ThemeIcon>
                                    </UnstyledButton>
                                ) : (
                                    <></>
                                )
                                }
                            </Group>
                        ) : (
                        pageElement[0] == 'banner' ? (
                            <>
                                <Link href={review.banner[0]}>
                                    <Image src={review.banner[1]} width={200}/>
                                </Link>
                                <Space h="xl"/>
                            </>
                        ) : (
                            pageElement[0] == 'description' ? (
                                <>
                                    <Group>
                                    {
                                        !editing ? (
                                        value !== '' ? (
                                            <Text>{value}</Text>
                                        ) : (
                                            <Text>{review.description}</Text>
                                        )
                                        ) : (
                                        value !== '' ? (
                                            <TextInput defaultValue={value} style={{ width: "calc(100% - 42px)" }} onChange={handleChange}/>
                                        ) : (
                                            <TextInput defaultValue={review.description} style={{ width: "calc(100% - 42px)" }} onChange={handleChange}/>
                                        )
                                        )
                                    }
                                    {
                                        user !== 0 ? (
                                        <UnstyledButton onClick={() => {
                                            if(editing) {
                                            changes.push([pageElement[0], review.description, value])
                                            updateBody(changes)
                                            }

                                            setEditing(!editing)
                                        }}>
                                            <ThemeIcon variant="gradient" gradient={{ from: 'purple', to: 'pink' }}>
                                            {
                                                !editing ? (
                                                <Pencil size={20}/>
                                                ) : (
                                                <DeviceFloppy size={20}/>
                                                )
                                            }
                                            </ThemeIcon>
                                        </UnstyledButton>
                                        ) : (
                                        <></>
                                        )
                                    }
                                    </Group>
                                    <Space h="xl"/>
                                </>
                            ) : (
                                pageElement[0] == "title2" ? (
                                    <>
                                        <Group>
                                            {
                                                !editing ? (
                                                    value !== '' ? (
                                                    <Title order={4}>{value}</Title>
                                                    ) : (
                                                    <Title order={4}>{pageElement[1]}</Title>
                                                    )
                                                ) : (
                                                    value !== '' ? (
                                                    <TextInput defaultValue={value} style={{ width: "calc(100% - 42px)" }} onChange={handleChange}/>
                                                    ) : (
                                                    <TextInput defaultValue={pageElement[1]} style={{ width: "calc(100% - 42px)" }} onChange={handleChange}/>
                                                    )
                                                )
                                            }
                                            {
                                                user !== 0 ? (
                                                    <UnstyledButton onClick={() => {
                                                    if(editing) {
                                                        changes.push([pageElement[0], pageElement[1], value])
                                                        updateBody(changes)
                                                    }
                    
                                                    setEditing(!editing)
                                                    }}>
                                                    <ThemeIcon variant="gradient" gradient={{ from: 'purple', to: 'pink' }}>
                                                        {
                                                        !editing ? (
                                                            <Pencil size={20}/>
                                                        ) : (
                                                            <DeviceFloppy size={20}/>
                                                        )
                                                        }
                                                    </ThemeIcon>
                                                    </UnstyledButton>
                                                ) : (
                                                    <></>
                                                )
                                            }
                                        </Group>
                                        <Space h="md"/>
                                    </>
                                ) : (
                                    pageElement[0] == "table" ? (
                                        <>
                                            <Card shadow="sm" p="lg" style={{overflowX: 'scroll'}}>
                                                <Table striped highlightOnHover>
                                                    <thead>
                                                        <tr>
                                                            {
                                                                pageElement[1][1].map((header,index) => {
                                                                    return (
                                                                        <th key={index}>{header}</th>
                                                                    )
                                                                })
                                                            }
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            pageElement[2][1].map((header,index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        {
                                                                            header.map((element,index) => {
                                                                                return (
                                                                                    element == "y" ? (
                                                                                        <td key={index}>
                                                                                            <Check stroke="green" strokeWidth={3} size={20}/>
                                                                                        </td>
                                                                                    ) : (
                                                                                        element == "n" ? (
                                                                                            <td key={index}>
                                                                                                <X stroke="red" strokeWidth={3} size={20}/>
                                                                                            </td>
                                                                                        ) : (
                                                                                            <td key={index}>{element}</td>
                                                                                        )
                                                                                    )
                                                                                )
                                                                            })
                                                                        }
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </Table>
                                            </Card>
                                            <Space h="md"/>
                                        </>
                                    ) : (
                                        pageElement[0] == 'image' ? (
                                            <>
                                                <Card shadow="sm" p="lg">
                                                    <Image src={pageElement[1]} alt={pageElement[2]} height={250} fit="contain" style={{maxWidth:'800px', margin: 'auto'}}/>
                                                </Card>
                                                <Space h="xl"/>
                                            </>
                                        ) : (
                                            pageElement[0] == 'affiliate' ? (
                                                <>
                                                    <Group>
                                                        {
                                                            !editing ? (
                                                                value !== '' ? (
                                                                    <a href={pageElement[2]} target="_blank" rel="noopener noreferrer">
                                                                        <Button onClick={() => {
                                                                            window.gtag('event', 'Affiliate Link Clicked', {
                                                                                page: review.title,
                                                                                link: pageElement[2]
                                                                            })
                                                                        }} variant="gradient" gradient={{ from: 'purple', to: 'pink' }} style={{ marginTop: 14 }}>
                                                                            {value}
                                                                        </Button>
                                                                    </a>
                                                                ) : (
                                                                    <a href={pageElement[2]} target="_blank" rel="noopener noreferrer">
                                                                        <Button onClick={() => {
                                                                            window.gtag('event', 'affiliate_link_clicked', {
                                                                                page: review.title,
                                                                                link: pageElement[2]
                                                                            })
                                                                        }} variant="gradient" gradient={{ from: 'purple', to: 'pink' }} style={{ marginTop: 14 }}>
                                                                            {pageElement[1]}
                                                                        </Button>
                                                                    </a>
                                                                )
                                                            ) : (
                                                                value !== '' ? (
                                                                    <TextInput defaultValue={value} style={{ width: "calc(100% - 42px)" }} onChange={handleChange}/>
                                                                ) : (
                                                                    <TextInput defaultValue={pageElement[1]} style={{ width: "calc(100% - 42px)" }} onChange={handleChange}/>
                                                                )
                                                            )
                                                        }
                                                        {
                                                            user !== 0 ? (
                                                                <UnstyledButton onClick={() => {
                                                                    if(editing) {
                                                                        changes.push([pageElement[0], review.button, value])
                                                                        updateBody(changes)
                                                                    }

                                                                    setEditing(!editing)
                                                                }}>
                                                                <ThemeIcon variant="gradient" gradient={{ from: 'purple', to: 'pink' }}>
                                                                    {
                                                                        !editing ? (
                                                                            <Pencil size={20}/>
                                                                        ) : (
                                                                            <DeviceFloppy size={20}/>
                                                                        )
                                                                    }
                                                                </ThemeIcon>
                                                                </UnstyledButton>
                                                            ) : (
                                                                <></>
                                                            )
                                                        }
                                                    </Group>
                                                    <Space h="xl"/>
                                                    <Space h="xl"/>
                                                    <Space h="xl"/>
                                                </>
                                            ) : (
                                                pageElement[0] == 'url' ? 
                                        <a href={pageElement[1]}>pageElement[2]</a>: (<></>)
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )
  )
}
