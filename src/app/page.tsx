import { cookies } from 'next/headers'

export const revalidate = 10

export default async function Home() {
    const cookiesList = cookies()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>{cookiesList.get('cookie-test').value}</div>
            Hello world
        </main>
    )
}
