import { useEffect, useState } from "react";
import { getAllPosts } from "../utils/posts";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <section id="all-blogs">
        <motion.h1
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-headingText text-4xl text-center mb-8">Blogs</span>
      </motion.h1>


      <div className="max-w-4xl mx-auto p-8 pb-16">
      <ul className="space-y-8">
        {posts.map((post, index) => (
          <motion.li
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b border-gray-200 pb-8 last:border-b-0"
          >
            <Link
              to={`/blog/${post.slug}`}
              className="flex items-center space-x-4 hover:opacity-75 transition-opacity duration-300"
            >
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">{post.title}</h2>
                <small className="text-gray-500">{new Date(post.date).toDateString()}</small>
                <p className="text-gray-700 mt-2">{post.excerpt}</p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
        </div>
    </section>
  );
}
