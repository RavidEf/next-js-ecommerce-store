'use client';

import AddToCartButton from './addButton';

export default function FormAddToCart() {
  function handelSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <p>Item quntity: </p>
        <AddToCartButton />
      </form>
    </div>
  );
}
