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

export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
  const reviews = await prisma.review.findMany({
    where: {
      public: true
    }
  });

  return {
    props: {reviews},
  };
};

const reviews = ({reviews}) => {
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
        <Grid style={{width: '90%'}} columns={2}>
          {reviews.map((review, index) => {
            return (
              <Grid.Col md={2} lg={1}  style={{ minHeight: 120 }} key={index}>
                <Review
                  review={review}
                />
              </Grid.Col>
            )
          })}
        </Grid>
      </Group>
    </>
  )
}

export default reviews