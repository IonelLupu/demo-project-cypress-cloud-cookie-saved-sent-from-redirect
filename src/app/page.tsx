'use client'
import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'

export const revalidate = 10
export default function Home() {
    const [myCookie, setMyCookie] = useState<string | undefined>(undefined)
    useEffect(() => {
        setMyCookie(getCookie('cookie-test'))
    }, [])
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>cookie value: {myCookie}</div>
            Hello world
        </main>
    )
}
