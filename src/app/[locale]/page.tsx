import {unstable_setRequestLocale} from "next-intl/server";
// libs

import MainBanner from "./components/MainBanner";
import ThreeCardsBlock from "./components/ThreeCardsBlock";
import TwoCardsBlock from "./components/TwoCardsBlock";
// components

interface IProps {
  params: {locale: string}
}

const Home = ({params: {locale}}: IProps) => {
  unstable_setRequestLocale(locale);

  return (
    <>
      <MainBanner />
      <ThreeCardsBlock />
      <TwoCardsBlock />
    </>
);
}

export default Home
