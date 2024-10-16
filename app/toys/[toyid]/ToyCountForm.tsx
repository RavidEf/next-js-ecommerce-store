'use client';

import './ToyCountForm.css';
import { useState } from 'react';
// import { dummyObj } from '../../database/toysobjects';
import CreateOrUpdateCookie from './actions';

type Props = {
  toyid: number;
};

export default function ToyCountForm(props: Props) {
  const [quantity, setQuantity] = useState(1);
  // const itemTotalPrice = quantity * dummyObj.price;
  function handleIncrement(event: React.MouseEvent<HTMLButtonElement>) {
    setQuantity(Number(quantity + 1));
    event.preventDefault();
  }

  function handleDecrement(event: React.MouseEvent<HTMLButtonElement>) {
    setQuantity(Number(quantity > 1 ? quantity - 1 : []));
    event.preventDefault();
  }

  return (
    <form className="toy-form">
      <p>choose amount to add to cart:</p>
      <div className="box-3-buttons-toy">
        <div className="button-toy-form">
          <button
            className="minus-button"
            value={quantity}
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="item-quntity" data-test-id="product-quantity">
            {quantity}
          </span>
          <button
            className="plus-button"
            value={quantity}
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <button
          className="add-to-cart"
          formAction={() => CreateOrUpdateCookie(props.toyid, quantity)}
          data-test-id="product-add-to-cart"
        >
          Add to cart
        </button>
      </div>
    </form>
  );
}
