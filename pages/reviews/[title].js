import React from 'react'
import parse from 'html-react-parser'
import { Card, Grid, UnstyledButton, TextInput, Switch, Affix, ThemeIcon, Space, Group, Blockquote, Text, Box, Title, Button, Image, BackgroundImage, Center } from '@mantine/core'
import { DeviceFloppy, Pencil } from 'tabler-icons-react'
import { useForm } from '@mantine/form'
import Link from 'next/link'
import prisma from '../../lib/prisma'
import { useState, useEffect } from 'react'
import Error from 'next/error'

export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
  const review = await prisma.review.findFirst({
    where: {
      id: parseInt(resolvedUrl.slice(9))
    },
  });

  if (!review) {
    return {
      notFound: true
    }
  }

  return {
    props: {review},
  };
};    

const Review = ({review}) => {
  const [user, setUser] = useState(0)

  useEffect(() => {
    try {
        fetch('/api/auth/verify')
        .then((res) => res.json())
        .then((newUser) => {
            setUser(newUser)
        }).catch((err) => {
            setUser(0)
        })
    } catch {
        setUser(0)
    }
  }, [user])

  const form = useForm({
    initialValues: {
        public: review.public
    },
  });

  if(user == 0 && !review.public) {
    return <Error statusCode={404} />
  }

  const update = async (review) => {
    try {
        await fetch('/api/update', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(review)
        })
        await router.push(`reviews/${review.id}`)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div style={{width: '90%',margin: 'auto', marginTop: '1vh', marginBottom: '150px'}}>
      {
        user !== 0 ? (
          <Affix position={{ bottom: 80, right: 20 }}>
            <Card shadow="sm" p="lg">
              <Group>
                <form onSubmit={form.onSubmit((values) => {
                  review = {
                    id: review.id,
                    public: values.public
                  }

                  update(review)
                })}>
                  <Switch color="pink" radius="sm" label="Public" {...form.getInputProps('public', { type: 'checkbox' })}/>
                  <Button type="submit" variant="gradient" gradient={{from: "pink", to: "purple", deg: 45}} style={{ marginTop: 14 }}>Save</Button>
                </form>
              </Group>
            </Card>
          </Affix>
        ) : (
          <></>
        )
      }
      {
        review.body.map(pageElement => {
          const [editing, setEditing] = useState(false)
          const [value, setValue] = useState('')
          const handleChange = event => {
            setValue(event.target.value)
          }

          return pageElement[0] == "hero" ? (
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
                        gradient={{ from: review.colors[0], to: review.colors[1], deg: 45 }}
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
                        <UnstyledButton onClick={() => setEditing(!editing)}>
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
                      {pageElement[1].map(review => {
                        return (
                          <Grid.Col span={3}>
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
                          <UnstyledButton onClick={() => setEditing(!editing)}>
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
                                <UnstyledButton onClick={() => setEditing(!editing)}>
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
                        <></>
                      )
                    )
                  )
                )
              )
            )
          )
        })
      }
    </div>
  )
}

export default Review