import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/blog");
const contentImgDir = path.join(process.cwd(), "content/img");
const publicDir = path.join(process.cwd(), "public");
const publicImgDir = path.join(publicDir, "img");
const blogPublicDir = path.join(publicDir, "blog");

// Ensure directories exist
if (!fs.existsSync(blogPublicDir)) {
  fs.mkdirSync(blogPublicDir, { recursive: true });
}
if (!fs.existsSync(publicImgDir)) {
  fs.mkdirSync(publicImgDir, { recursive: true });
}

const files = fs.readdirSync(contentDir);

const posts = files.map((file) => {
  const filePath = path.join(contentDir, file);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  // copy markdown to public/blog
  fs.copyFileSync(
    filePath,
    path.join(blogPublicDir, file)
  );

  // Ensure coverImage path is correct
  if (data.coverImage && data.coverImage.startsWith("content/img/")) {
    const imgName = path.basename(data.coverImage);
    const srcImgPath = path.join(contentImgDir, imgName);
    const destImgPath = path.join(publicImgDir, imgName);
    if (fs.existsSync(srcImgPath)) {
      fs.copyFileSync(srcImgPath, destImgPath);
    }
    data.coverImage = `/img/${imgName}`;
  }

  return {
    slug: file.replace(".md", ""),
    ...data,
  };
});

// sort newest first
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// write posts.json
fs.writeFileSync(
  path.join(publicDir, "posts.json"),
  JSON.stringify(posts, null, 2)
);

console.log("✅ posts.json generated");
