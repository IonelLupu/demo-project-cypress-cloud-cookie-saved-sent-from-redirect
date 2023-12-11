import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const isInsideGithub = process.env.RUNNER_ENVIRONMENT === 'github-hosted'

export async function middleware(request: NextRequest) {
    let response: NextResponse | undefined

    // redirecting inside Github runners gives redirection errors because Github runners, I think, can't save cookies
    if (!isInsideGithub) {

        let anonymousId = request.cookies.get('cookie-test')?.value
        if (!anonymousId) {
            response = NextResponse.redirect(request.url)
            response.cookies.set('cookie-test', 'test value')
        }
    }

    return response
}

