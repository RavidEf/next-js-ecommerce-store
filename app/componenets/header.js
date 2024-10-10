import './header.css';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getToys } from '../database/toysobjects';

export default async function Header() {
  const toysQunatityCookie = (await cookies()).get('cart');

  let toysQunatity =
    toysQunatityCookie && toysQunatityCookie.value
      ? JSON.parse(toysQunatityCookie.value || '[]')
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
          <Link href="/">
            <Image
              src="/images/cattos.png"
              height={43}
              width={196}
              alt="logo"
            />
          </Link>
          <Link className="about-link" href="/about">
            About
          </Link>
          <Link className="toys-link" href="/toys">
            Toys
          </Link>
          <div className="cart-icon-container">
            <Link href="/cart">
              <Image
                src="/images/shopping-cart-icon.png"
                height={48}
                width={48}
                alt="logo"
              />
            </Link>
            <span>{itemsInCart}</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
