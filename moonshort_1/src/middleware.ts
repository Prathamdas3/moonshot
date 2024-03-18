import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/users/login" ||
    path === "/" ||
    path === "/users/signup" ||
    path === "/users/verification";

  const token = request.cookies.get("token")?.value ?? "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/items", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/users/login", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/",
    "/items",
    "/users/login",
    "/users/signup",
    "/users/verification",
  ],
};
