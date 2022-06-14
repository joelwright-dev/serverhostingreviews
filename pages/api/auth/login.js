import { sign } from "jsonwebtoken"
import { serialize } from "cookie"

const secret = process.env.SECRET

export default async function (req, res) {
    try {
        const { id, username } = req.body
    
        const token = sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            _id: id,
            username: username
        }, secret)
    
        const serialised = serialize("JWT", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: '/'
        })
    
        res.setHeader('Set-Cookie', serialised)
        res.status(200).json({ message: "Success" })
    } catch {
        res.status(500).json({ message: "Failure" })
    }
}