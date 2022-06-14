import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const logout = () => {
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

export default logout