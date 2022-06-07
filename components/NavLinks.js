import React from 'react';
import { Wallet, Exchange, Apps, Download, Home, AlertCircle, Messages } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import Link from 'next/link'
import { Book2, InfoCircle } from 'tabler-icons-react';

function SideLink({ icon, color, label, href, currentPage }) {
  const css = `
  a {
      color: inherit; /* blue colors for links too */
      text-decoration: inherit; /* no underline */
    }`

  return (
    <>
      <style>
          {css}
      </style>
        <Link href={`/${href}`} passHref>
            <UnstyledButton
              sx={(theme) => ({
                  display: 'block',
                  width: '100%',
                  padding: theme.spacing.xs,
                  borderRadius: theme.radius.sm,
                  color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                  '&:hover': {
                  backgroundColor:
                      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                  },
              })}
            >
              <Group>
                  {
                    currentPage.replace('/','') == href ? (
                      <>
                        <ThemeIcon variant="gradient" gradient={{ from: 'pink', to: 'purple', deg: 45 }}>
                          {icon}
                        </ThemeIcon>
                        <Text 
                          size="sm"
                          variant="gradient"
                          gradient={{ from: 'purple', to: 'pink', deg: 45 }}
                          weight={800}
                        >
                          {label}
                        </Text>
                      </>
                    ) : (
                      <>
                        <ThemeIcon color="pink" variant="outline">
                          {icon}
                        </ThemeIcon>
                        <Text size="sm">{label}</Text>
                      </>
                    )
                  }
              </Group>
            </UnstyledButton>
        </Link>
    </>
  );
}

function MainLink({ icon, color, label, href, currentPage }) {
  return (
    <>
      <Link href={`/${href}`} passHref>
          <UnstyledButton
            sx={(theme) => ({
                display: 'block',
                width: '40%',
                padding: 5,
                paddingLeft: 15,
                paddingRight: 15,
                marginLeft: 15,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                textAlign: 'center',
                height: '100%',

                '&:hover': {
                backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                },
            })}
          >
            {
              currentPage.replace('/','') == href ? (
                <Text 
                  size="sm"
                  variant="gradient"
                  gradient={{ from: 'purple', to: 'pink', deg: 45 }}
                  weight={800}
                >
                  {label}
                </Text>
              ) : (
                <Text size="sm">{label}</Text>
              )
            }
          </UnstyledButton>
        </Link>
      </>
    );
  }

const Pagedata = [
    { icon: <Home size={16} />, color: 'blue', label: 'Home', href: '' },
    { icon: <InfoCircle size={16} />, color: 'teal', label: 'About', href: 'about' },
    { icon: <Book2 size={16} />, color: 'violet', label: 'Reviews', href: 'reviews' },
];
  
export function LinksDown({currentPage}) {
  const links = Pagedata.map((link) => 
    <SideLink {...link} currentPage={currentPage} key={link.label} />
  );
  return <div>{links}</div>;
}

export function LinksAcross({currentPage}) {
    const links = Pagedata.map((link) => 
      <MainLink {...link} currentPage={currentPage} key={link.label}/>
    );
    return <div style={{display:'flex',flexDirection: 'row',float:'right'}}>{links}</div>;
  }