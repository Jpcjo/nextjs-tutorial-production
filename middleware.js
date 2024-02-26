// Middleware in Next.js is a piece of code that allows you to perform actions
// before a request is completed and modify the response accordingly.

import { NextResponse } from "next/server";
//https://nextjs.org/docs/app/api-reference/functions/next-response
//In Next.js, the NextResponse class is used to represent the response to be sent back to the client in server-side middleware functions.
// THIS IS TO RESTRICT PATH!!!
// Restrict the access to "/about/:path*" and be redirected back to "/"

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL("/", request.url));
}
//In the provided example, request.url is being used in a middleware function to redirect the
//user to the root URL, which is indicated by new URL('/', request.url). This means that the
//user will be redirected to the root of the website, represented by "/".

//So, in this case, request.url represents the current URL that the user is trying to access.
//When combined with new URL('/', request.url), it indicates that the user should be redirected
//to the root of the website, regardless of the current URL they are trying to access.

// See "Matching Paths" below to learn more.
// Anything path after about/ will be restricted for access too
export const config = {
  matcher: ["/about/:path*"],
};

// export function middleware() {
//   return Response.json({ msg: "Hello there!!!" });
// }
// export const config = { matcher: "/about" };

// export function middleware() {
//   console.log("hello world");
// }
// // this happens when clicking on every route. it's default

// export const config = { matcher: "/about" };
