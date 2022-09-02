import { NextResponse } from 'next/server';

// Middleware will be invoked for every route in your project. 

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("Middleware intercepted request for", request.url);
  return NextResponse.redirect(new URL('/about-2', request.url))
}

export const config = {
    matcher: '/about/:path*',
}
  