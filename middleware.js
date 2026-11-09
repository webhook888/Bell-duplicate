import { NextResponse } from "next/server";

export function middleware() {
  // Keep the site accessible while homepage changes are being reviewed.
  // The Coming Soon page remains available directly at /coming-soon.
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|admin|coming-soon|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
