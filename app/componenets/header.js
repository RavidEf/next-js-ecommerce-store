import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/Cart">Cart Icon</Link>
        </nav>
      </div>
    </header>
  );
}
