import {ReactNode} from "react";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {locales} from "../../config";
//libs

import Header from "../../components/Header/index";
// components

import "../globals.css";
// styles

interface IProps {
  children: ReactNode,
  params: {locale: string}
}

export const generateStaticParams = () => {
  return locales.map((locale) => ({locale}));
}

// function to allow multilingual metadata (tab title)
export const generateMetadata = async ({params: {locale}}: Omit<IProps, "children">) => {
  const t = await getTranslations({locale, namespace: "LocaleLayout"});

  return {
    title: t("title"),
  }
}

export default async function RootLayout({ children, params: {locale} }: IProps) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
