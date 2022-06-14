// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma'

export default async function handler(req, res) {
  const review = req.body

  const result = await prisma.review.create({
    data: {
      title: review.title,
      description: review.description,
      button: review.button,
      stars: review.stars,
      colors: review.colors,
      body: review.body,
      banner: review.banner,
      href: review.href,
    }
  })

  res.json(result)
}
