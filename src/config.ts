import {Pathnames, LocalePrefix} from "next-intl/routing";

// Configs to allow multilingual with "next-intl"

export const locales = ["en", "ua"] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  "/": "/",
  "/blog": "/blog"
}

export const localePrefix: LocalePrefix<Locales> = "always"