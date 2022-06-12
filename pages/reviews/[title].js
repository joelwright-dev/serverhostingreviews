import React from 'react'
import parse from 'html-react-parser'
import { Button } from '@mantine/core'

const Review = () => {
    const review = {
    title: 'A review',
    button: 'Read about Shockbyte hosting!',
    stars: 4,
    description: 'Shockbyte hostign has been around for blah blah and overs blah blah amount of servers, if you like hosting servers for your friends, or just want to try it out, Shockbyte is the place for you.',
    body: '<Button>test</Button>',
    banner: '<a href="https://shockbyte.com/billing/aff.php?aff=3047"><img src="https://shockbyte.com/assets/img/partners/twitch/shockbyte_affiliate.png" alt="Minecraft Server Hosting" height="115"/></a>',
    href: 'reviews/shockbyte',
    title: 'shockbyte'
  }

  return (
    <div>
        {parse(review.body)}
    </div>
  )
}

export default Review