import React from 'react';
import CheckoutForm from '../../componenets/checkoutform';

export const metadata = {
  title: 'Checkout',
  description: 'The checkout page for the Cattos store',
};

export default function CheckoutPage() {
  return (
    <div>
      <h1>This is my Checkout page</h1>
      <CheckoutForm />
    </div>
  );
}
