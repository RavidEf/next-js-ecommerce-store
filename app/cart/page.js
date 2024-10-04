import './cart.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ToysPage from '../toys/page';

export const metadata = {
  title: 'Cart',
  description: 'The checkout page for the Cattos store',
};

export default function CartPage(props) {
  return (
    <section>
      <h1>This is the Cart page</h1>
      <h3>Here are the items in your cart:</h3>
      <div className="cart-container">
        <div>
          <img
            src="https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25e4758081e3d8e88cb10/stills_0640_png/MY2021/14693/14693_st0640_116.png"
            alt="Audi"
            width={200}
            height={150}
          />
        </div>
        <div>
          <p>placeholder: item name</p>
        </div>
        <div className="cart-buttons">
          <button>+</button>
          <p>0</p>
          <button>-</button>
        </div>
        <div className="total-price-cart">Total price:</div>
      </div>

      <div>
        <Link href="/cart/checkout">Go to Checkout</Link>
      </div>
    </section>
  );
}
