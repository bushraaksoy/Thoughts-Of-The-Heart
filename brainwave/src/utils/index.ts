import matter from "gray-matter";

export function getBlogContent(blog: string){ // => test
    return matter(blog);
}
