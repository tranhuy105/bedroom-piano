import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";

// Không thể import hẳn từ authts vì ORM adapter như prisma không hỗ trợ Edge, giải pháp là thay vì dùng database thì session strat sẽ phải force thành jwt,phải tạo một authconfig khác, không có adapter k tương thích với Edge rồi parse lại...
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  const isApiAuthRoute =
    nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes =
    publicRoutes.includes(nextUrl.pathname) &&
    !authRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    // neu la cai nay thi eo duoc lam gi ca, cu de no pass
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(
        new URL(DEFAULT_LOGIN_REDIRECT, nextUrl)
      );
    }

    // neu chua login thi de nguyen o trang do de login
    return null;
  }

  if (!isLoggedIn && !isPublicRoutes) {
    return Response.redirect(
      new URL("/auth/login", nextUrl)
    );
  }

  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
