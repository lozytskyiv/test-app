"use client";
import {useTranslations} from "next-intl";
import {usePathname} from "../../navigation";
// libs

import {Link} from "../../navigation";
// components

import styles from "./Navigation.module.scss"
//styles

const Navigation = () => {
  const t = useTranslations("Navigation");
  const pathName = usePathname();

  const links = [
    {link: "/", title: t("Home")},
    {link: "/blog", title: t("Blog")},
  ]

  console.log("pathName", pathName)

  return <div className={styles.navigation}>
    {links.map(({link, title}, index) => (
      <Link key={index} href={link} className={pathName === link ? styles.active : ""}>{title}</Link>
    ))}
  </div>
}

export default Navigation