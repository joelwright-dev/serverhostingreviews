import React from 'react'
import parse from 'html-react-parser'
import { Card, Grid, Space, Group, Blockquote, Text, Box, Title, Button, Image, BackgroundImage, Center } from '@mantine/core'
import Link from 'next/link'

const Review = () => {
  const review = {
    title: 'Shockbyte Server Hosting - A Comprehensive Review',
    button: 'Read about Shockbyte hosting!',
    stars: 4,
    description: 'Shockbyte hostign has been around for blah blah and overs blah blah amount of servers, if you like hosting servers for your friends, or just want to try it out, Shockbyte is the place for you.',
    colors: ['blue', 'blue'],
    body: [
      ['hero','https://www.minecraft.net/content/dam/games/minecraft/marketplace/updates-catspandas_latest.jpg'],
      ['title','Overview of Shockbyte Hosting'],
      ['description'],
      ['body', 'Body content'],
      ['banner'],
      ['title', 'A bruh moment to be sure'],
      ['reviews', [['Really good', 'Jimbo'], ['Incredible', 'Jeff'], ['Sick', 'Chad'], ['Based', 'Giga Chad']]],
      ['body', 'More body content'],
      ['button']
    ],
    banner: ['https://shockbyte.com/billing/aff.php?aff=3047', 'https://shockbyte.com/assets/img/partners/twitch/shockbyte_affiliate.png'],
    href: 'reviews/shockbyte'
  }

  return (
    <div style={{width: '90%',margin: 'auto', marginTop: '1vh'}}>
      {
        review.body.map(pageElement => {
          return pageElement[0] == "hero" ? (
            <>
              <Box sx={{ maxHeight: 300 }} mx="auto">
                <BackgroundImage src={pageElement[1]} style={{height:'300px'}} radius={10}>
                  <Center style={{ width: '100%', height: '100%', padding: '50px', background: 'rgba(0,0,0,0.6)', borderRadius: 10 }}>
                    <Title order={1} align="center">
                      <Text
                        inherit
                        component="span"
                        align="center"
                        variant="gradient"
                        gradient={{ from: review.colors[0], to: review.colors[1], deg: 45 }}
                        weight={700}
                        style={{ fontFamily: 'Greycliff CF, sans-serif' }}
                      >
                        {review.title}
                      </Text>
                    </Title>
                  </Center>
                </BackgroundImage>
              </Box>
              <Space h="xl"/>
            </>
          ) : (
            pageElement[0] == "title" ? (
              <>
                <Title order={3}>{pageElement[1]}</Title>
                <Space h="md"/>
              </>
            ) : (
              pageElement[0] == "body" ? (
                <>
                  <Text>{pageElement[1]}</Text>
                  <Space h="xl"/>
                </>
              ) : (
                pageElement[0] == "reviews" ? (
                  <>
                    <Grid columns={pageElement[1].length*3}>
                      {pageElement[1].map(review => {
                        return (
                          <Grid.Col span={3}>
                            <Card shadow="sm" p="lg" style={{height:'100%'}}>
                              <Blockquote cite={`– ${review[1]}`}>
                                {review[0]}
                              </Blockquote>
                            </Card>
                          </Grid.Col>
                        )
                      })}
                    </Grid>
                    <Space h="xl"/>
                  </>
                ) : (
                  pageElement[0] == "button" ? (
                    <Button variant="gradient" gradient={{from: review.colors[0], to: review.colors[1], deg: 45}} style={{ marginTop: 14 }}>
                        {review.button}
                    </Button>
                  ) : (
                    pageElement[0] == 'banner' ? (
                      <>
                        <Link href={review.banner[0]}>
                          <Image src={review.banner[1]} width={200}/>
                        </Link>
                        <Space h="xl"/>
                      </>
                    ) : (
                      pageElement[0] == 'description' ? (
                        <>
                          <Text>{review.description}</Text>
                          <Space h="xl"/>
                        </>
                      ) : (
                        <></>
                      )
                    )
                  )
                )
              )
            )
          )
        })
      }
    </div>
  )
}

export default Review