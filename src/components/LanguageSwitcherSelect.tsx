"use client";
import {ChangeEvent, ReactNode, useTransition} from "react";
import {useRouter, usePathname} from "../navigation";
import {useParams} from "next/navigation";
// libs

interface IProps {
  children: ReactNode;
  defaultValue: string;
  label: string;
}

const LanguageSwitcherSelect = ({children, defaultValue}: IProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname()
  const params = useParams();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-ignore
        {pathname, params},
        {locale: nextLocale}
      )
    })
  }

  return <select
      defaultValue={defaultValue}
      disabled={isPending}
      onChange={onSelectChange}
    >
      {children}
    </select>
}

export default LanguageSwitcherSelect