import {createLocalizedPathnamesNavigation} from "next-intl/navigation";
import {localePrefix, locales, pathnames} from "./config"

// Change navigation components to allow "next-intl"

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix
  })