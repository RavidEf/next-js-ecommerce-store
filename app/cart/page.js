import './cart.css';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getToys } from '../database/toysobjects';

export const metadata = {
  title: 'Cart',
  description: 'The checkout page for the Cattos store',
};

export default async function CartPage() {
  const toysQunatityCookie = (await cookies()).get('toysCookies');

  let toysQunatity = toysQunatityCookie
    ? JSON.parse(toysQunatityCookie.value)
    : [];

  if (!Array.isArray(toysQunatity)) {
    toysQunatity = [];
  }

  // console.log('cookie details:', toysQunatity);

  const toys = getToys();
  console.log(toys[1].price);
  return (
    <section>
      <h1>This is the Cart page </h1>
      <h3>Here are the items in your cart:</h3>
      <div>
        {toys.map((toy) => {
          const toysCountQuantity = toysQunatity.find(
            (toyCountQuantity) => toy.id === toyCountQuantity.id,
          );

          return (
            <section key={`toys-${toy.id}`}>
              <div className="cart-container">
                <div>
                  <img src="" alt="image-placeholder" />
                </div>
                <div>
                  <p>{toy.firstName}</p>
                </div>
                <div className="cart-buttons">
                  <p>{toysCountQuantity?.quantity}</p>
                </div>
                <div className="total-price-cart">
                  Total price:
                  {toysCountQuantity?.quantity * toy.price}
                </div>
              </div>
            </section>
          );
        })}
        <Link href="/cart/checkout">
          Go to Checkout <b>CTA button</b>
        </Link>
      </div>
    </section>
  );
}
