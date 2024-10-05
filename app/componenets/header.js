import './header.css';
import Link from 'next/link';
import React from 'react';
import AddToCartButton from './addButton';

export default function Header(props) {
  return (
    <header>
      <div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/toys">Toys</Link>
          <Link href="/cart">Cart Icon</Link>
          <p>{props.count}</p>
        </nav>
      </div>
    </header>
  );
}
