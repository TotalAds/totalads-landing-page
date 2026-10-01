import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function hostname(request: NextRequest): string {
  const raw = request.headers.get("host") ?? "";
  return raw.split(":")[0].toLowerCase();
}

export function middleware(request: NextRequest) {
  const host = hostname(request);
  const { pathname } = request.nextUrl;

  // Keep product URLs memorable from the marketing navigation while serving the
  // existing canonical pages. This also avoids duplicate content for case-only URLs.
  if (pathname === "/LeadHub") {
    const url = request.nextUrl.clone();
    url.pathname = "/leadhub";
    return NextResponse.redirect(url, 308);
  }

  if (pathname === "/LeadSnipper") {
    const url = request.nextUrl.clone();
    url.pathname = "/products/leadsnipper";
    return NextResponse.rewrite(url);
  }

  if (host === "leadhub.leadsnipper.com" && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/leadhub";
    return NextResponse.rewrite(url);
  }

  const isLocal = host === "localhost" || host === "127.0.0.1";
  const isLeadSnipperHost =
    host === "leadsnipper.com" || host === "www.leadsnipper.com";

  if (!isLocal && isLeadSnipperHost && pathname === "/leadhub") {
    return NextResponse.redirect("https://leadhub.leadsnipper.com", 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/leadhub", "/LeadHub", "/LeadSnipper"],
};
