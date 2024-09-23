import {getRequestConfig} from "next-intl/server";
import {notFound} from "next/navigation";
import {locales} from "./config";

// Function that config localization files

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
