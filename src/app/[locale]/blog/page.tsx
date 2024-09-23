import {unstable_setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";
// libs

import BlogList from "./components/BlogList";
// components

import styles from "./page.module.scss";
//styles

interface IProps {
  params: {locale: string}
}

const Blog = ({params: {locale}}: IProps) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Blog");

  return (
    <div className={styles.blogPage}>
      <h1>{t("title")}</h1>
      <BlogList />
    </div>
  );
}

export default Blog
