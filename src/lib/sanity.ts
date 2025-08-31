import { createClient } from "@sanity/client";
import type { Book, Course, Post } from "../types"; 
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2025-08-29",
});
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}


export async function getCourses(): Promise<Course[]> {
  const query = `*[_type == "course"]{
    _id,
    title,
    tags,
    "firstBookCoverUrl": books[0]->coverUrl
  }`;
  return await client.fetch(query);
}

export async function getCourseById(id: string): Promise<Course | null> {
  const query = `*[_type == "course" && _id == $id][0]{
    _id,
    title,
    description,
    "books": books[]->{
      _id,
      title,
      author,
      coverUrl
    }
  }`;
  const params = { id };
  return await client.fetch(query, params);
}

export async function getBookById(id: string): Promise<Book | null> {
    const query = `*[_type == "book" && _id == $id][0]{
        _id,
        title,
        author,
        textContent
    }`;
    const params = { id };
    return await client.fetch(query, params);
}

export async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    "author": author->{ name, picture }
  } | order(publishedAt desc)`;
  return await client.fetch(query);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    "author": author->{ name, picture }
  }`;
  const params = { slug };
  return await client.fetch(query, params);
}
