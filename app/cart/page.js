import './cart.css';
import { cookies } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { getToysInsecure } from '../../database/toysobjects';
import { calculateTotalCartPrice } from '../../util/combine-product';
import { handelClickToCheckout } from '../componenets/click-to-checkout';
import DeleteCookieForm from '../componenets/deletecookieform';

export const metadata = {
  title: 'Cart',
  description: 'The checkout page for the Cattos store',
};

export default async function CartPage() {
  const toysQunatityCookie = (await cookies()).get('cart');

  let toysQunatity = toysQunatityCookie
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
  console.log('filtered toys:', filteredToys);
  // call the function we declare in the util folder and pass the variables it needs
  const totalCartPrice = calculateTotalCartPrice(filteredToys, toysQunatity);

  return (
    <>
      <section>
        <div className="headline-cart">
          <h1>Your basket </h1>

          <h3>Here are the items in your basket:</h3>
        </div>
        <div>
          {filteredToys.map((toy) => {
            const toysCountQuantity = toysQunatity.find(
              (toyCountQuantity) => toy.id === toyCountQuantity.id,
            );
            return (
              <section
                key={`toys-${toy.id}`}
                data-test-id="cart-product-<product id>"
              >
                <div className="cart-container">
                  <div>
                    <Image
                      src={`/images/${toy.imageName.toLowerCase()}.png`}
                      alt={toy.firstName}
                      width={125}
                      height={125}
                    />
                  </div>
                  <div>
                    <p>{toy.firstName}</p>
                  </div>
                  <div className="cart-buttons">
                    <p data-test-id="cart-product-quantity-<product id>">
                      {' '}
                      number of items: {toysCountQuantity?.quantity}
                    </p>
                  </div>
                  <div className="total-price-cart">
                    Price:
                    {toysCountQuantity?.quantity * toy.price}
                    <span>€</span>
                  </div>
                  <div>
                    <DeleteCookieForm toyid={toy.id} />
                  </div>
                </div>
              </section>
            );
          })}
          <button data-test-id="cart-checkout" onClick={handelClickToCheckout}>
            Go to Checkout
          </button>
        </div>
      </section>

      <div>
        <h3 data-test-id="cart-total">
          Cart total: {totalCartPrice}
          <span>€</span>
        </h3>
      </div>
    </>
  );
}
