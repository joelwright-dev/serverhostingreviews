// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma'
import { server } from '../../config'
import { verify } from 'jsonwebtoken'
const secret = process.env.SECRET

export default async function handler(req, res) {
  const review = req.body
  const { cookies } = req;
  const token = cookies.JWT;

  verify(token, secret, (err, verifiedJwt) => {
    if(err) {
      res.json({
        error: 'Not authenticated'
      })
    } else {
      prisma.review.create({
        data: {
          title: review.title,
          review: review.review,
          description: review.description,
          button: review.button,
          stars: review.stars,
          colors: review.colors,
          body: review.body,
          banner: review.banner,
          href: review.href,
        }
      }).then((result) => res.json(result))
    }
  })
}
