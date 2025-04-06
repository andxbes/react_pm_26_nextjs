import Link from "next/link";

export default function BlogPostPage({ params }) {
  // console.info('Loading');
  return (
    <main>
      <h1>Blog Post</h1>
      {params.slug}
    </main>
  );
}
