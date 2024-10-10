import { cookies } from 'next/headers';
import React from 'react';
import CheckoutForm from '../../componenets/checkoutform';
import { getToys } from '../../database/toysobjects';

export const metadata = {
  title: 'Checkout',
  description: 'The checkout page for the Cattos store',
};

export default async function CheckoutPage() {
  const toysQunatityCookie = (await cookies()).get('cart');

  let toysQunatity =
    toysQunatityCookie && toysQunatityCookie.value
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

  return (
    <div>
      <h1>This is my Checkout page</h1>
      <CheckoutForm />
      <p>total to be paid: {totalCartPrice}</p>
    </div>
  );
}
