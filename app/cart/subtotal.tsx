// this function calculates the sub total of the cart
import React from 'react';

export function CartSubTotal({ quantity, price }) {
  const itemPrice = quantity * price;
  const subTotal = itemPrice + itemPrice;

  return <div>Here is your sub total: {subTotal} </div>;
}
