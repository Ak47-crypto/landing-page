import { NextResponse, NextRequest } from "next/server";
// import type { NextRequest } from 'next/server'
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
// import type { JWT } from 'next-auth/jwt';
// This function can be marked `async` if using `await` inside
export const config = {
  matcher: ["/sign-in", "/sign-up", "/jokes"],
};
export async function middleware(request: NextRequest) {
  //   return NextResponse.redirect(new URL('/', request.url))
  const token = await getToken({ req: request });
  const url = request.nextUrl;
  if (
    token && (url.pathname.startsWith("/sign-in") ||
    url.pathname.startsWith("/sign-up") )
  ) {
    console.log(token, "in if");
    return NextResponse.redirect(new URL("/jokes", request.url));
  }
  if(!token && (url.pathname.startsWith("/jokes"))){
    console.log(token);
    
    return NextResponse.redirect(new URL("/sign-in",request.url))
  }
  console.log(token, "not in if");
  return NextResponse.next();
  // return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more