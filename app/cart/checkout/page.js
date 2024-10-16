import './checkoutpage.css';
import { cookies } from 'next/headers';
import React from 'react';
import { getToysInsecure } from '../../../database/toysobjects';
import CheckoutForm from '../../componenets/checkoutform';

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

  const toys = await getToysInsecure();

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
    <div className="checkout-page">
      <h1>Check-this-out</h1>
      <CheckoutForm />
      <h3 className="checkout-total">total to be paid: {totalCartPrice} €</h3>
    </div>
  );
}
