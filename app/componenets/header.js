import './header.css';
import Link from 'next/link';
import React from 'react';
import SetCookieForm from './setcookieform';

export default function Header(testCookie) {
  return (
    <header>
      <div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/toys">Toys</Link>
          <Link href="/cart">Cart Icon</Link>
          <p>count: {testCookie.value}</p>
        </nav>
      </div>
    </header>
  );
}
