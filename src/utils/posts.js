import matter from "gray-matter";

export async function getAllPosts() {
  const res = await fetch("/posts.json");
  return res.json();
}

export async function getPostBySlug(slug) {
  const res = await fetch(`/blog/${slug}.md`);
  const text = await res.text();

  const { content, data } = matter(text);

  // Fix coverImage path
  if (data.coverImage && data.coverImage.startsWith("content/img/")) {
    data.coverImage = "/img/" + data.coverImage.split("/").pop();
  }

  return { content, ...data };
}
