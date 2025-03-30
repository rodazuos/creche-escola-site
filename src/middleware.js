import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
  const { nextUrl } = req;
  const token = req.cookies.get("token");
  if (token !== undefined) {
    const { value: valueToken } = token;
    const response = await fetch(new URL("/api/auth", req.url), {
      headers: {
        Authorization: `Bearer ${valueToken}`,
      },
    });
    if (response.status === 200) {
      if (nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/home", req.url));
      }
      const requestHeaders = new Headers();
      if (nextUrl.pathname.includes("/api/")) {
        requestHeaders.set("authorization", `Bearer ${valueToken}`);
      }
      return NextResponse.next({
        request: { headers: requestHeaders },
      });
    }
  }

  return nextUrl.pathname === "/"
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/", req.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
