import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Logout() {
    const router = useRouter()

    useEffect(() => {
        axios.get('/api/auth/logout').then(
            router.push('/')
        )
    })

    return (
        <></>
    )
}