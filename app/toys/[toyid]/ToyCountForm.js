'use client';

import { useState } from 'react';
// import { dummyObj } from '../../database/toysobjects';
import CreateOrUpdateCookie from './actions';

export default function ToyCountForm(props) {
  const [quantity, setQuantity] = useState(0);
  // const itemTotalPrice = quantity * dummyObj.price;
  function handleIncrement(event) {
    setQuantity(Number(quantity + 1));
    event.preventDefault();
  }

  function handleDecrement(event) {
    setQuantity(Number(quantity > 0 ? quantity - 1 : []));
    event.preventDefault();
  }

  return (
    <>
      <div>how about this?</div>
      <form>
        <label htmlFor="quantity">Add quantity of product: </label>

        <button id="quantity" value={quantity} onClick={handleIncrement}>
          +
        </button>
        <p>Count:{quantity}</p>
        <button id="quantity" value={quantity} onClick={handleDecrement}>
          -
        </button>
        <button formAction={() => CreateOrUpdateCookie(props.toyid, quantity)}>
          Update cart
        </button>
      </form>
    </>
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
