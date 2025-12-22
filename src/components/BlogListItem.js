import { Link } from "react-router-dom";

export default function BlogListItem({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="card">
      <img src={post.coverImage} alt={post.title} />

      <div>
        <h2>{post.title}</h2>
        <span>{new Date(post.date).toDateString()}</span>
        <p>tgre{post.excerpt}</p>
      </div>
    </Link>
  );
}
