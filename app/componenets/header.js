import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/toys">Toys</Link>
          <Link href="/cart">Cart Icon</Link>
        </nav>
      </div>
    </header>
  );
}
