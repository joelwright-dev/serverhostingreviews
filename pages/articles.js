import React, { useState } from 'react';
import {
  Title,
  Center,
  Space,
  Text,
  Badge,
  Image,
  Group,
  Button,
  Card,
  Grid,
  useMantineTheme,
} from '@mantine/core';
import Review from '../components/Review'
import Logo from '../components/Logo'
import Link from 'next/link'
import prisma from '../lib/prisma'
import { useEffect } from 'react'
import Meta from '../components/Meta';

export async function getStaticProps (context) {
  const reviews = await prisma.review.findMany();

  return {
    props: {reviews},
    revalidate: 10
  };
};

export default function Reviews({reviews}) {
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

  if(user == 0) {
    reviews = reviews.filter(review => (review.public))
  }

  return (
    <>
      <Meta title={`Server Hosting Reviews - Articles`} keywords="server hosting reviews minecraft terraria ark csgo rust 2022 list gaming game articles questions answers" description="Find answers for questions related to server hosting for games like Minecraft and Rust and general information."/>
      <Group position="center" direction="column">
        <Space h="xl"/>
        <Group direction="column" position="center">
          <Title order={1} align="center">
            <Text
              inherit
              component="span"
              align="center"
              variant="gradient"
              gradient={{ from: 'purple', to: 'pink', deg: 45 }}
              weight={700}
              style={{ fontFamily: 'Greycliff CF, sans-serif' }}
            >
              Server Hosting Articles and Tutorials
            </Text>
          </Title>
          <Text align="center">Are you looking for an answer to a query or question you have about server hosting? Look through my articles!</Text>
        </Group> 
        <Grid style={{width: '90%'}} columns={2}>
          {reviews.map((review, index) => {
            if(review.review == false) {
              return (
                <Grid.Col md={2} lg={1}  style={{ minHeight: 120 }} key={index}>
                  <Review
                    review={review}
                  />
                </Grid.Col>
              )
            } else {
              return (<></>)
            }
          })}
        </Grid>
      </Group>
    </>
  )
}