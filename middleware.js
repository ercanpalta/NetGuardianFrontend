import { NextResponse } from 'next/server'
import isAuth from './isAuth'
 
export function middleware(request) {
    if(!isAuth()){
        return NextResponse.redirect(new URL('/login', request.url))
    }
  
}
 
export const config = {
  matcher: '/',
}