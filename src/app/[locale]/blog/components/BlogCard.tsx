"use client";
import {useRouter} from "../../../../navigation";
// libs

import Image from "next/image";
//components

import blogPlaceholder from "../../../../assets/blogPlaceholder.svg"
//assets

import styles from "../page.module.scss"
//styles

interface IProps {
  title: string;
  body: string;
  id: number;
}

const BlogCard = ({title, body, id}: IProps) => {
  const router = useRouter();

  const onCardClick = () => {
    router.push(`/blog/${id}?title=${title}&body=${body}`)
  }

  return <div className={styles.blogCard} onClick={onCardClick}>
    <div>
      <Image
        width={100}
        height={100}
        src={blogPlaceholder}
        alt="placeholder"
      />
    </div>
    <div className={styles.blogCardInfo}>
      <h3 className={styles.blogCardTitle}>{title}</h3>
      <p className={styles.blogCardBody}>{body}</p>
    </div>
  </div>
}

export default BlogCard