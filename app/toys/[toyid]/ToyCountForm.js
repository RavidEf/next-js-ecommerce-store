'use client';

import './ToyCountForm.css';
import { useState } from 'react';
// import { dummyObj } from '../../database/toysobjects';
import CreateOrUpdateCookie from './actions';

export default function ToyCountForm(props) {
  const [quantity, setQuantity] = useState(1);
  // const itemTotalPrice = quantity * dummyObj.price;
  function handleIncrement(event) {
    setQuantity(Number(quantity + 1));
    event.preventDefault();
  }

  function handleDecrement(event) {
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

// old form with select
{
  /* <input
          id="quantity"
          value={quantity}
          onChange={(event) => {
            setQuantity(event.currentTarget.value);
          }}
        /> */
}
{
  /* <select
          id="quantity"
          value={quantity}
          onChange={(event) => {
            setQuantity(Number(event.currentTarget.value));
          }}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select> */
}
