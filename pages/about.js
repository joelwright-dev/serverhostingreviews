import React from 'react'
import { Title, Text, Group, Image, Button, Box, BackgroundImage, Center, Space } from '@mantine/core'

const about = () => {
  return (
    <>
      <Box sx={{ maxHeight: 300 }} mx="auto">
          <BackgroundImage src="/about.jpg" style={{height:'300px'}} radius={10}>
              <Center style={{ width: '100%', height: '100%', padding: '50px', background: 'rgba(0,0,0,0.5)', borderRadius: 10 }}>
                  <Title order={1} align="center">
                      <Text
                      inherit
                      component="span"
                      align="center"
                      variant="gradient"
                      gradient={{ from: "purple", to: "pink", deg: 45 }}
                      weight={700}
                      style={{ fontFamily: 'Greycliff CF, sans-serif' }}
                      >
                        About Server Hosting Reviews
                      </Text>
                  </Title>
              </Center>
          </BackgroundImage>
      </Box>
      <Space h="xl"/>
      <Text>
        I could start by telling you what this site is and why you should support it but I'm sure you've been told that numerous times by countless other sites, so let's talk about me.
        <Space h="sm"/>
        My name is Joel Wright, since the age of 13 I've had an innate passion for the IT space. It started with Python. More specifically, silly art using the Turtle library. Once I'd had my fun with graphics in Turtle, I found pygame, a library for creating video games with Python. Like every kid, I loved video games, and naturally, being at the start of my IT journey, wanted to make them. I spent hours and hours of my holidays learning Unity and Unreal Engine, trying to create scary horror games which just ended up goofy, shriveled up like a piece of paper, and thrown in the bin. It was fun though.
        <Space h="sm"/>
        From there, I moved onto slightly more nuanced fields, I took a crack at using .NET to create simple applications which opened shortcuts to my favourite games and software. Through school, I found out how to create websites with HTML and CSS, and in one assignment used PHP to create a data-driven web application. From there on out, I knew I had found something I was passionate about, the web.
        <Space h="sm"/>
        I took my crack at Bitcoin, Ethereum, and blockchain technology, mining on my old GTX 1050 TI thinking it would make me some money, I just ended up wasting power. I learned about the architecture of the blockchain, the principles behind the P2P and decentralized movement, and even made a few blockchain apps. Then, on a detour due to wanting to build a web application using blockchain technology, I found out about React and Next.js, frameworks for creating better applications on the web.
        <Space h="sm"/>
        This recent discovery has lead to my desire to rebuild this very site. A few years ago, I wanted to make a bit of cash, as you do. I found out about affiliate marketing, the holy grail of making money online. I created this site, Server Hosting Reviews. My first 2 shots didn't turn out great, I had no clue about SEO and didn't know how to reach people, but there's one thing I've done in my years in tech which has led me to the knowledge I have today, hosting servers for friends.
        <Space h="sm"/>
        I hosted Minecraft servers initially, broke some friendships, and made some, you know how it is. Hosted some Ark servers, Rust, and Terraria, namely the games I review server hosts for on this site. The point is that I've had experience with hosting servers. Locally and externally. And all of this has led me to where I am today. I've created this website using Next.js and the component library Mantine to easily create reviews for different server hosts across the industry so you can find the server host you deserve.
        <Space h="sm"/>
        In the end, I'm a regular guy, trying to make money by reviewing server hosts. I make money by you reading through my reviews, choosing the server host which suits you best, and buying a server from them. But hey, at least you know me now. So if you want to support this small endeavour I've put myself on, help me out and click the link in my reviews to buy a server, and don't worry, it comes out of the server hosts pocket, not yours, you don't have to pay an extra dime! I wish you all the best in life, my friends.
      </Text>
    </>
  )
}

export default about