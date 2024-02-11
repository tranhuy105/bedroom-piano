/**
 * Cac route duoc access boi public, khong can authen
 */
export const publicRoutes = ["/"];

/**
 * Cac route duoc dung de authentication
 * Se co chuc nang redirect nguoi dung ve protected route
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for API authentication routes, khong bao gio duoc block
 * routes bat dau voi prefix nay se duoc dung cho API authentication
 */
export const apiAuthPrefix = "/api/auth";

/**
 * route redirect mac dinh sau khi login
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
