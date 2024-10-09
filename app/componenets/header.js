import './header.css';
import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { getToys } from '../database/toysobjects';

export default async function Header() {
  const toysQunatityCookie = (await cookies()).get('toysCookies');

  let toysQunatity = toysQunatityCookie
    ? JSON.parse(toysQunatityCookie.value)
    : [];

  if (!Array.isArray(toysQunatity)) {
    toysQunatity = [];
  }

  const toys = getToys();

  // filter the products to only show when quantity is more than 0
  const filteredToys = toys.filter((toy) => {
    const toysCountQuantity = toysQunatity.find(
      (toyCountQuantity) => toy.id === toyCountQuantity.id,
    );
    return toysCountQuantity?.quantity > 0;
  });

  const itemsInCart = filteredToys.reduce((acc, toy) => {
    // Find the quantity of the current toy based on its id
    const toyQuantity =
      toysQunatity.find((item) => item.id === toy.id)?.quantity || 0;
    return acc + toyQuantity;
  }, 0);

  return (
    <header>
      <div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/toys">Toys</Link>
          <Link href="/cart">Cart Icon</Link>
          <p>count: {itemsInCart}</p>
        </nav>
      </div>
    </header>
  );
}
