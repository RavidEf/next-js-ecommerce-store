import './cart.css';
import { cookies } from 'next/headers';
// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DeleteCookieForm from '../componenets/deletecookieform';
import { getToys } from '../database/toysobjects';

export const metadata = {
  title: 'Cart',
  description: 'The checkout page for the Cattos store',
};

export default async function CartPage() {
  const toysQunatityCookie = (await cookies()).get('cart');

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

  const totalCartPrice = filteredToys.reduce((acc, toy) => {
    // Find the quantity of the current toy based on its id
    const toyQuantity =
      toysQunatity.find((item) => item.id === toy.id)?.quantity || 0;
    return acc + toy.price * toyQuantity;
  }, 0);

  console.log('this is my subtotal from cart:', totalCartPrice);

  return (
    <>
      <section>
        <h1>This is the Cart page </h1>
        <h3>Here are the items in your cart:</h3>
        <div>
          {filteredToys.map((toy) => {
            const toysCountQuantity = toysQunatity.find(
              (toyCountQuantity) => toy.id === toyCountQuantity.id,
            );
            return (
              <section key={`toys-${toy.id}`}>
                <div className="cart-container">
                  <div>
                    <img
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Froyalty-free&psig=AOvVaw2zGyP2enmrVzlO_8Y8-NcC&ust=1728574592005000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiPwqfQgYkDFQAAAAAdAAAAABAE"
                      alt="image-placeholder"
                    />
                  </div>
                  <div>
                    <p>{toy.firstName}</p>
                  </div>
                  <div className="cart-buttons">
                    <p> number of items: {toysCountQuantity?.quantity}</p>
                  </div>
                  <div className="total-price-cart">
                    Price:
                    {toysCountQuantity?.quantity * toy.price}
                  </div>
                  <div>
                    <DeleteCookieForm toyid={toy.id} />
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

      <div>total: {totalCartPrice}</div>
    </>
  );
}
