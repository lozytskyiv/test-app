import {useTranslations} from "next-intl";
// libs

import InfoCard from "./InfoCard";
// components

import placeholder1 from "../../../assets/placeholder1.webp";
//assets

import styles from "../page.module.scss";
//styles

const ThreeCardsBlock = () => {
  const t = useTranslations("Home");

  const cards = [
    {title: t("cardTitle"), image: placeholder1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra maximus laoreet. Morbi et elit eu ex ornare luctus eu quis est. Fusce vitae enim consequat, facilisis tortor at, blandit metus. Donec sagittis tincidunt pretium."},
    {title: t("cardTitle"), image: placeholder1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra maximus laoreet. Morbi et elit eu ex ornare luctus eu quis est. Fusce vitae enim consequat, facilisis tortor at, blandit metus. Donec sagittis tincidunt pretium."},
    {title: t("cardTitle"), image: placeholder1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra maximus laoreet. Morbi et elit eu ex ornare luctus eu quis est. Fusce vitae enim consequat, facilisis tortor at, blandit metus. Donec sagittis tincidunt pretium."},
  ]

  return (
    <>
      <div className={styles.cardsBlock}>
        <h2>{t("title")}</h2>
        <div className={styles.threeCardsBlock}>
          {cards.map(({title, image, description}, index) => (
            <InfoCard key={index} image={image} title={title} description={description} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ThreeCardsBlock