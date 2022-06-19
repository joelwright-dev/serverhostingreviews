// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma'
import axios from 'axios'
import { verify } from 'jsonwebtoken'
const secret = process.env.SECRET

function searchForArray(haystack, needle){
    var i, j, current;
    for(i = 0; i < haystack.length; ++i){
        if(needle.length === haystack[i].length){
        current = haystack[i];
        for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
        if(j === needle.length)
            return i;
        }
    }
    return -1;
}  

export default async function handler(req, res) {
    const { review, changes } = req.body
    const { cookies } = req;
    const token = cookies.JWT;

    verify(token, secret, (err, verifiedJwt) => {
        if(err) {
            res.json({
                error: 'Not authenticated'
            })
        } else {
            const original = [changes[0][0], changes[0][1]]
            const newBody = review.body

            if(changes[0][0] == 'button') {
                prisma.review.update({
                    where: {
                        id: review.id
                    },
                    data: {
                        button: changes[0][2]
                    }
                }).then((result) => res.json(result))
            } else if(changes[0][0] == 'description') {
                prisma.review.update({
                    where: {
                        id: review.id
                    },
                    data: {
                        description: changes[0][2]
                    }
                }).then((result) => res.json(result))
            } else {
                newBody[searchForArray(review.body, original)] = [changes[0][0], changes[0][2]]

                prisma.review.update({
                    where: {
                        id: review.id
                    },
                    data: {
                        body: newBody
                    }
                }).then((result) => res.json(result))
            }

        }
    })
}
