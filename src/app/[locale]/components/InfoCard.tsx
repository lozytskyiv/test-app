import Image, {StaticImageData} from "next/image";
// components

import styles from "../page.module.scss";
//styles

interface IProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const InfoCard = ({image, title, description}: IProps) => {
  return (
    <div className={styles.infoCard}>
      <Image src={image} alt="" />
      <div className={styles.infoCardText}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default InfoCard