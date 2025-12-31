import fm from "front-matter";

export async function getAllPosts() {
  const res = await fetch("/posts.json");
  return res.json();
}

export async function getPostBySlug(slug) {
  const res = await fetch(`/blog/${slug}.md`);
  const text = await res.text();

  const { attributes, body } = fm(text);

  // Fix coverImage path
  if (attributes.coverImage && attributes.coverImage.startsWith("content/img/")) {
    attributes.coverImage = "/img/" + attributes.coverImage.split("/").pop();
  }

  return { content: body, ...attributes };
}
