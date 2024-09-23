import {useLocale, useTranslations} from "next-intl";
import {locales} from "../config";
// libs

import LanguageSwitcherSelect from "./LanguageSwitcherSelect";
// components

const LanguageSwitcher = () => {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();

  return (
    <LanguageSwitcherSelect
      defaultValue={locale}
      label={t("label")}
    >
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", {locale: cur})}
        </option>
      ))}
    </LanguageSwitcherSelect>
  )
}

export default LanguageSwitcher