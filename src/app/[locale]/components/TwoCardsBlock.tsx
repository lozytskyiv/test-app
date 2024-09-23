import {useTranslations} from "next-intl";
// libs

import Image from "next/image";
// components

import placeholder1 from "../../../assets/placeholder1.webp"
// assets

import styles from "../page.module.scss"
//styles

const TwoCardsBlock = () => {
  const t = useTranslations("Home");
  return (
    <>
      <div className={styles.cardsBlock}>
        <h2>{t("title")}</h2>
        <div className={styles.twoCardsBlock}>
          <div className={styles.infoCard}>
            <Image src={placeholder1} alt="" />
            <div className={styles.infoCardText}>
              <h4>{t("cardTitle")}</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra maximus laoreet. Morbi et elit eu ex ornare luctus eu quis est. Fusce vitae enim consequat, facilisis tortor at, blandit metus. Donec sagittis tincidunt pretium.</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <Image src={placeholder1} alt="" />
            <div className={styles.infoCardText}>
              <h4>{t("cardTitle")}</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra maximus laoreet. Morbi et elit eu ex ornare luctus eu quis est. Fusce vitae enim consequat, facilisis tortor at, blandit metus. Donec sagittis tincidunt pretium.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TwoCardsBlock