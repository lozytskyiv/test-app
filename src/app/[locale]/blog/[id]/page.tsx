"use client"
import {useSearchParams} from "next/navigation";
import {useTranslations} from "next-intl";
//libs

import {Link} from "../../../../navigation";
import Image from "next/image";
//components

import blogPlaceholder from "../../../../assets/blogPlaceholder.svg";
//assets

import styles from "./page.module.scss";
//styles

interface IProps {
  params: {locale: string}
}

const SingleBlog = ({}: IProps) => {
  const t = useTranslations("SingleBlog");
  const searchParams = useSearchParams();

  return (
    <div className={styles.postPage}>
      <Link className={styles.backLink} href={"/blog"}>{'< '}{t("Back")}</Link>
      <h1>{searchParams.get('title')}</h1>
      <div className={styles.postImage}>
        <Image
          height={300}
          src={blogPlaceholder}
          alt="placeholder"
        />
      </div>
      <p>{searchParams.get('body')}</p>
    </div>
  );
}

export default SingleBlog
