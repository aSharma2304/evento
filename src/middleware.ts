import { decrypt } from "@/lib/sessions";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// const protectedRoutes = ["/", "events", "/host"];
const publicRoutes = ["/login", "/signup"];
const staticAssets = ["/_next", "/static", "/favicon.ico"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublic = publicRoutes.some((route) => path.startsWith(route));
  const isProtected = !isPublic;

  if (staticAssets.some((asset) => path.startsWith(asset))) {
    return NextResponse.next();
  }

  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;
  const session = await decrypt(cookie);

  console.log(isProtected);
  console.log(isPublic);
  console.log(session);

  if (isProtected && !session!) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublic && session?.userId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
}
