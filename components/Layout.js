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
      navbarOffsetBreakpoint="lg"
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
          // Breakpoint at which navbar will be hidden if hidden prop is true
          hiddenBreakpoint="sm"
          // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
          hidden={!opened}
          // when viewport size is less than theme.breakpoints.sm navbar width is 100%
          // viewport size > theme.breakpoints.sm – width is 300px
          // viewport size > theme.breakpoints.lg – width is 400px
          width={{ sm: 300, lg: 400 }}
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