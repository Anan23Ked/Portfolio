import fs from "fs";
import path from "path";
import fm from "front-matter";

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
  const { attributes } = fm(fileContents);

  // copy markdown to public/blog
  fs.copyFileSync(
    filePath,
    path.join(blogPublicDir, file)
  );

  // Ensure coverImage path is correct
  if (attributes.coverImage && attributes.coverImage.startsWith("content/img/")) {
    const imgName = path.basename(attributes.coverImage);
    const srcImgPath = path.join(contentImgDir, imgName);
    const destImgPath = path.join(publicImgDir, imgName);
    if (fs.existsSync(srcImgPath)) {
      fs.copyFileSync(srcImgPath, destImgPath);
    }
    attributes.coverImage = `/img/${imgName}`;
  }

  return {
    slug: file.replace(".md", ""),
    ...attributes,
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
