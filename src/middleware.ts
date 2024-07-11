import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { USER } from "@/constants/index";

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const user = cookieStore.get(USER.USER_ADMIN);

  if (!user) return NextResponse.redirect(new URL("/", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/portal", "/portal/admin"],
};
