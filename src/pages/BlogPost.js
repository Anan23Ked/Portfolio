import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostBySlug } from "../utils/posts.js";
import { marked } from "marked";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostBySlug(slug).then(setPost);
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <article className="max-w-4xl mx-auto pb-16 pt-24">
      <h1 className="text-blogHeading font-semibold text-4xl text-left mb-8">{post.title}</h1>
      <p>{new Date(post.date).toDateString()}</p>
      <div 
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
        className="prose"
        dangerouslySetInnerHTML={{
          __html: post.content ? marked(post.content) : '',
        }}
      />
    </article>
  );
}
