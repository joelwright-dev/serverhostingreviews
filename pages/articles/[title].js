import React from 'react'
import parse from 'html-react-parser'
import { Card, Grid, UnstyledButton, TextInput, Switch, Affix, ThemeIcon, Space, Group, Blockquote, Text, Box, Title, Button, Image, BackgroundImage, Center } from '@mantine/core'
import { useForm } from '@mantine/form'
import prisma from '../../lib/prisma'
import { useState, useEffect } from 'react'
import Error from 'next/error'
import ReviewContent from '../../components/ReviewContent'
import Meta from '../../components/Meta'

export const getStaticPaths = async () => {
  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export async function getStaticProps (context) {
  const { params } = context
  const title = params.title

  const review = await prisma.review.findFirst({
    where: {
      title: title.replaceAll("-", " ")+"?"
    },
  });

  if (!review) {
    return {
      notFound: true
    }
  }

  return {
    props: {review},
    revalidate: 10
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
    <>
      <Meta title={`Server Hosting Reviews - ${review.title}`} keywords={"server hosting reviews 2022 list gaming game " + review.title} description={review.seodescription}/>
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
        review.body.map((pageElement, index) => (
          <ReviewContent pageElement={pageElement} review={review} user={user} key={index}/>
        ))
      }
    </div>
  </>
  )
}

export default Review