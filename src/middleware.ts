import createMiddleware from "next-intl/middleware";
import {locales} from "./config";

// Middleware for multilingual with "next-intl"

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix: 'as-needed',
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}