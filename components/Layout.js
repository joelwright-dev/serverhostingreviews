import Meta from './Meta'
import { Sun, MoonStars } from 'tabler-icons-react';
import { useEffect, useState } from "react";
import {
  createStyles,
  MantineProvider,
  AppShell,
  Header,
  Navbar,
  Burger,
  MediaQuery,
  Text,
  Anchor,
  Footer,
  useMantineColorScheme,
  useMantineTheme,
  Group,
  Button,
  Select
} from "@mantine/core";
import { Title } from '@mantine/core'
import { LinksDown, LinksAcross } from './NavLinks'
import Logo from './Logo'
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  navbar: {
    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  },

  links: {
    width: '30vw',
    paddingRight: 0,
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  }
}));

const Layout = ({children, currentPage, user}) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <AppShell
      fixed
      footer={
        <Footer height={60}>
          <Group position="apart" p="md">
            <Text
              variant="gradient"
              gradient={{ from: 'purple', to: 'pink', deg: 45 }}
              size="md"
              weight={700}
            >
              Server Hosting Reviews
            </Text>
            <Text size="xs" weight={400}>
              Find the best server host for your game server.
            </Text>
          </Group>
        </Footer>
      }
      header={
        <Header height={60} p="md">
          <div style={{display: 'flex', justifyContent: "space-between"}}>
            <Group position="apart" style={{width: '100%'}}>
              <Logo/>
              <div className={classes.links}> 
                {
                  user !== 0 ? (
                    <LinksAcross currentPage={currentPage} admin={true}/>
                  ) : (
                    <LinksAcross currentPage={currentPage}/>
                  )
                }
              </div>
            </Group>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
              />
            </MediaQuery>
          </div>
        </Header>
      }
      navbar={
        <Navbar
          p="md"
          hidden={!opened}
          className={classes.navbar}
        >
          {
            user !== 0 ? (
              <LinksDown currentPage={currentPage} admin={true}/>
            ) : (
              <LinksDown currentPage={currentPage}/>
            )
          }
        </Navbar>
      }
    >
      {children}
    </AppShell>
  );
}

export default Layout