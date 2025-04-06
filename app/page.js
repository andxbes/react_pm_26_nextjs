import Link from "next/link";

export default function Home() {
  // console.info('Loading');
  return (
    <main>
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About Us</Link></p>
      <p><Link href="/blog">Blog</Link></p>
    </main>
  );
}
