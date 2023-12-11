import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
    let response: NextResponse | undefined

    let anonymousId = request.cookies.get('cookie-test')?.value
    if (!anonymousId) {
        response = NextResponse.redirect(request.url)
        response.cookies.set('cookie-test', 'test value')
    }

    return response
}

