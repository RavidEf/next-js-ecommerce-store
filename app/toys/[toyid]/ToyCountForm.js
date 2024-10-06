'use client';

import { useState } from 'react';
import CreateOrUpdateCookie from './actions';

export default function ToyCountForm(props) {
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <div>how about this?</div>
      <form>
        <label htmlFor="quantity">Add quantity of product: </label>
        <input
          id="quantity"
          value={quantity}
          onChange={(event) => {
            setQuantity(event.currentTarget.value);
          }}
        />
        <button formAction={() => CreateOrUpdateCookie(props.toyid, quantity)}>
          Add quant
        </button>
      </form>
    </>
  );
}
