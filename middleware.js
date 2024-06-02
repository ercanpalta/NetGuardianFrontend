import { NextResponse } from 'next/server'
import isAuth from './isAuth'
 
export function middleware(request) {
    if(!isAuth()){
        return NextResponse.redirect(new URL('/login', request.url))
    }else if(request.url.endsWith("/")){
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
}
 
export const config = {
  matcher: ['/', '/alerts', '/dashboard', '/requests', '/devices', '/wblists', '/profile']
}