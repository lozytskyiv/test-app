import {useTranslations} from "next-intl";
// libs

import Image from "next/image";
// components

import banner from "../../../assets/banner.jpg"
// assets

import styles from "../page.module.scss"
//styles

const MainBanner = () => {
  const t = useTranslations("Home");
  return (
    <div className={styles.mainBanner}>
      <Image
        src={banner}
        alt="mainBanner"
      />
      <h1>{t("mainBannerTitle")}</h1>
      <p>{t("mainBannerText")}</p>
    </div>
  )
}

export default MainBanner;