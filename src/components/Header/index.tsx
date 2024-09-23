import LanguageSwitcher from "../LanguageSwitcher";
import Navigation from "../Navigation/index";
import Image from "next/image";
// components

import vercelLogo from "../../assets/vercelLogo.svg";
// assets

import styles from "./Header.module.scss";
//styles

const Header = () => {
  return <header className={styles.header}>
    <div className={styles.logo}>
      <Image src={vercelLogo} alt="logo" />
    </div>
    <Navigation />
    <div>
      <LanguageSwitcher />
    </div>
  </header>
}

export default Header