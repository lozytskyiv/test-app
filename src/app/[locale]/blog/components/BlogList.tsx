import BlogCard from "./BlogCard";
// components

import {IPost} from "../../../../types";
// types

import styles from "../page.module.scss";
// styles

const BlogList = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1', {cache: "no-store"});
  const posts: IPost[] = await res.json();

  return <div className={styles.blogList}>
    {posts.map(({title, body, id}) => (
      <BlogCard key={id} id={id} title={title} body={body} />
    ))}
  </div>
}

export default BlogList