// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // If the path is `/en`, redirect to the root `/`
  if (pathname === "/en") {
    const url = req.nextUrl.clone();

    url.pathname = "/"; // Redirect to the root
    return NextResponse.redirect(url);
  }

  // Allow `/ro` to proceed
  if (pathname === "/ro") {
    return NextResponse.next(); // No redirection needed
  }

  // Allow all other requests to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/en", "/ro", "/"], // Apply middleware to these paths
};
