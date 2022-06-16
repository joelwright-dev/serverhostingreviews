// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma'
import axios from 'axios'
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
            prisma.review.update({
                where: {
                    id: review.id
                },
                data: {
                    public: review.public
                }
            }).then((result) => res.json(result))
        }
    })
}
