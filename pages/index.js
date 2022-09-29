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
import Game from '../components/Game'
import Logo from '../components/Logo'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Head>
        <meta name="description" content="Server Hosting Reviews is your one stop shop for server hosting reviews and deals. Find the best server hosts for your gaming needs with all the information you need."/>
      </Head>
      <Group position="center" direction="column">
        <Center style={{ width: '100%', height: "calc(100vh - 150px)"}}>
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
                Server Hosting Reviews
              </Text>
            </Title>
            <Space h="sm"/>
            <Text align="center">Are you looking to host a game server for you and your friends? Look no further.</Text>
            <Link href="reviews">
              <Button variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45}}>Get Hosting!</Button>
            </Link>
          </Group>
        </Center>  
        <Grid style={{width: '90%'}}>
          <Grid.Col md={6} lg={4}  style={{ minHeight: 120 }}>
            <Game
              img="https://i.insider.com/627a982fc1076b00183d48a5?width=700"
              alt="Minecraft Server Hosting"
              title="Minecraft"
              badge="Most Popular"
              description="Minecraft server hosting needs to be reliable so you and your friends can play together 24/7! Get the best Minecraft server host now!"
              button="Order Your Minecraft Server!"
              href="reviews/best-minecraft-server-hosting-(2022-ranked)"
            />
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Game
              img="https://store-images.s-microsoft.com/image/apps.4766.70406876433810089.4beffaca-3fee-4154-a21f-ecd9b3bedbb3.3feb4567-c790-499e-befe-50e5b9ba430f"
              alt="Terraria Server Hosting"
              title="Terraria"
              description="Terraria server hosting needs to meet your fit, find out what server host allows you to install the latest tModLoader mods for you and your friends!"
              button="Order Your Terraria Server!"
              href="reviews/best-terraria-server-hosting-(2022-ranked)"
            />
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Game
              img="https://store-images.s-microsoft.com/image/apps.44561.13510798887668935.255dcc7f-6e24-49bf-b627-c0e55cec0071.66c75e3a-b922-484a-898b-428455ac19cf?q=90&w=480&h=270"
              alt="ARK: Survival Evolved Server Hosting"
              title="ARK: Survival Evolved"
              description="ARK servers with support for Expansion Packs, DLC Maps, Custom Maps and Steam Workshop mods!"
              button="Order Your ARK Server!"
              href="reviews/best-ark-survival-evolved-server-hosts-(2022-ranked)"
            />
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Game
              img="https://static0.srcdn.com/wordpress/wp-content/uploads/2020/09/What-Is-Garrys-Mod-3.jpg"
              alt="Garry's Mod Server Hosting"
              title="Garry's Mod"
              description="Garry's Mod servers need workshop support and lots of performance! We wouldn't want your server crashing every time you drop a H-Bomb!"
              button="Order Your Garry's Mod Server!"
              href="reviews/best-garry's-mod-server-hosting-(2022-ranked)"
            />
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Game
              img="https://cdn.mos.cms.futurecdn.net/wWiYPAHWaVYiTHFpJeR8gS.jpg"
              alt="Rust Server Hosting"
              title="Rust"
              description="Rust servers with full support for Oxide plugins and 100s of players!"
              button="Order Your Rust Server!"
              href="reviews/best-rust-server-hosting-(2022-ranked)"
            />
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Game
              img="https://codaio.imgix.net/docs/N-l7LObnIs/blobs/bl-jiBiSWay2K/0a47d418f5115e683a4fe5798eb5e5cdc70a04202c6b2563194136f4a3e07fdeb86d57ec9928d6f64b2d0db816cbc96f72f6e37c9bf21b93c04940dabe956401a50029dbdba0e7675daa395c1e38795bd571adefac0dec1d05945460291801363e238c9a?auto=compress&fit=crop&ar=1.91%3A1&fm=jpg"
              alt="Counter-Strike: Global Offensive Server Hosting"
              title="Counter-Strike: Global Offensive"
              description="CS:GO servers with support for SourceMod and Metamod! Get a server to surf on or just have fun on a workshop map with your mates."
              button="Order Your CS:GO Server!"
              href="reviews/best-cs:go-server-hosts-(2022-ranked)"
            />
          </Grid.Col>
        </Grid>
        <Center style={{ width: '100%', height: "calc(100vh - 150px)"}}>
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
                About Me
              </Text>
            </Title>
            <Space h="sm"/>
            <Text align="center">I will be constantly uploading new reviews and reports about the server hosting and gaming industry. If you would like to support me and the server hosting reviews site, think about purchasing a server from the hosts I review - I obtain a commission on every sale.</Text>
            <Link href="reviews">
              <Button variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45}}>Read My Reviews!</Button>
            </Link>
          </Group>
        </Center> 
      </Group>
    </>
  )
}
