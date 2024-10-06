'use client';

import { useState } from 'react';

export default function ToyCountForm() {
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
        <button>Add quant</button>
      </form>
    </>
  );
}
