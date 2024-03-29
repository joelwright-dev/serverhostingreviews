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
      <Meta title={`Server Hosting Reviews - Reviews`} keywords="server hosting reviews minecraft terraria ark csgo rust 2022 list gaming game" description="Find the review that's right for you. Find reviews for Minecraft, Garry's Mod, Terraria, Ark: Survival Evolved, CS:GO and Rust."/>
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
              Game Server Hosting Service Reviews and Reports
            </Text>
          </Title>
          <Text align="center">Are you looking to host a game server for you and your friends? Look no further.</Text>
        </Group> 
        <Grid style={{width: '90%'}} columns={2}>
          {reviews.map((review, index) => {
            if(review.review == true) {
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