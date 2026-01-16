import { NextResponse } from "next/server";

export async function POST(request) {
  const res = NextResponse.redirect(new URL("/login", request.url));

  // delete cookie
  res.cookies.set("auth", "", {
    path: "/",
    maxAge: 0,
  });

  return res;
}
