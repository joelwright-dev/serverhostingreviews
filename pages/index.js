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
import Logo from '../components/Logo'

export default function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group position="center" direction="column">
        <Center style={{ width: '100%', height: "calc(100vh - 60px)"}}>
          <Group direction="column" position="center">
            <Title order={1}>
              <Text
                inherit
                component="span"
                align="center"
                variant="gradient"
                gradient={{ from: 'purple', to: 'pink', deg: 45 }}
                weight={700}
                style={{ fontFamily: 'Greycliff CF, sans-serif' }}
              >
                Server Hosting Reviews
              </Text>
            </Title>
            <Space h="sm"/>
            <Text align="center">Are you looking to host a game server for you and your friends? Look no further.</Text>
            <Button variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45}}>Get Hosting!</Button>
          </Group>
        </Center>  
        <Grid style={{width: '60%'}}>
          <Grid.Col md={6} lg={3}>
            <Card shadow="sm" p="lg">
              <Card.Section> 
                <Image src="https://www.minecraft.net/content/dam/games/minecraft/key-art/CC-Update-Part-II_600x360.jpg" alt="Minecraft Server Hosting" />
              </Card.Section>
              <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                <Text weight={500}>Minecraft</Text>
                <Badge color="pink" variant="gradient" gradient={{from: 'purple', to: 'pink', deg: 45}}>
                  Most Popular
                </Badge>
              </Group>
              <Text size="sm" style={{ lineHeight: 1.5 }}>
                Minecraft server hosting needs to be reliable so you and your friends can play together 24/7! Get the best Minecraft server host now!
              </Text>
              <Button variant="gradient" gradient={{from: 'purple', to: 'pink', deg: 45}} fullWidth style={{ marginTop: 14 }}>
                Order Your Minecraft Server!
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
          <Card shadow="sm" p="lg">
              <Card.Section> 
                <Image src="https://store-images.s-microsoft.com/image/apps.4766.70406876433810089.4beffaca-3fee-4154-a21f-ecd9b3bedbb3.3feb4567-c790-499e-befe-50e5b9ba430f" alt="Terraria Server Hosting" />
              </Card.Section>
              <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                <Text weight={500}>Terraria</Text>
              </Group>
              <Text size="sm" style={{ lineHeight: 1.5 }}>
                Terraria server hosting needs to meet your fit, find out what server host allows you to install the latest tModLoader mods for you and your friends!
              </Text>
              <Button variant="gradient" gradient={{from: 'purple', to: 'pink', deg: 45}} fullWidth style={{ marginTop: 14 }}>
                Order Your Terraria Server!
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
          
          </Grid.Col>
        </Grid>
      </Group>
    </>
  )
}
