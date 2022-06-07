import Meta from './Meta'
import { Sun, MoonStars } from 'tabler-icons-react';
import { useState } from "react";
import {
  createStyles,
  MantineProvider,
  AppShell,
  Header,
  Navbar,
  Burger,
  MediaQuery,
  Anchor,
  useMantineColorScheme,
  useMantineTheme,
  Group,
  Button
} from "@mantine/core";
import { Title } from '@mantine/core'
import { LinksDown, LinksAcross } from './NavLinks'
import Logo from './Logo'

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

const Layout = ({children, currentPage}) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <AppShell
      fixed
      header={
        <Header height={60} p="md">
          <div style={{display: 'flex', justifyContent: "space-between"}}>
            <Group position="apart" style={{width: '100%'}}>
              <Logo/>
              <div className={classes.links}>
                <LinksAcross currentPage={currentPage}/>
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
          <LinksDown currentPage={currentPage}/>
        </Navbar>
      }
    >
      {children}
    </AppShell>
  );
}

export default Layout