import { NextResponse } from 'next/server'

export function middleware(request) {
  // Preserve existing API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  // Handle admin routes
  if (request.nextUrl.pathname.startsWith('/admin/panel')) {
    // Your existing authentication logic will be preserved
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*', '/admin/panel/:path*']
} 