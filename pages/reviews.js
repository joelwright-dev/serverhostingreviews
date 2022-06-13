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

const reviews = () => {

  const review = {
    id: 1,
    title: 'A review',
    button: 'Read about Shockbyte hosting!',
    stars: 4,
    description: 'Shockbyte hostign has been around for blah blah and overs blah blah amount of servers, if you like hosting servers for your friends, or just want to try it out, Shockbyte is the place for you.',
    body: '<p>test</p>',
    banner: '<a href="https://shockbyte.com/billing/aff.php?aff=3047"><img src="https://shockbyte.com/assets/img/partners/twitch/shockbyte_affiliate.png" alt="Minecraft Server Hosting" height="115"/></a>',
    href: 'reviews/shockbyte',
    title: 'shockbyte'
  }

  return (
    <>
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
        <Grid style={{width: '90%'}}>
          <Grid.Col md={6} lg={4}  style={{ minHeight: 120 }}>
            <Review
              review={review}
            />
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
          <Review
              review={review}
            />
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Review
              review={review}
            />
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Review
              review={review}
            />
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Review
              review={review}
            />
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Review
              review={review}
            />
          </Grid.Col>
        </Grid>
      </Group>
    </>
  )
}

export default reviews