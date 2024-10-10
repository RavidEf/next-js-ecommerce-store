'use client';
import React from 'react';
import DeleteAllCookies from './deleteallcookies';

export default function CheckoutForm() {
  async function handelSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    await DeleteAllCookies();

    // Redirect to the thank you page
    window.location.href = '/cart/checkout/thankyou';
  }

  return (
    <section>
      <div>
        <form onSubmit={handelSubmit}>
          <label htmlFor="fName">First Name</label>
          <input id="fName" data-test-id="checkout-first-name" />

          <label htmlFor="LName">Last Name</label>
          <input id="LName" data-test-id="checkout-last-name" />

          <label htmlFor="email">Email</label>
          <input id="email" data-test-id="checkout-email" />

          <label htmlFor="address">Address</label>
          <input id="address" data-test-id="checkout-address" />

          <label htmlFor="city">City</label>
          <input id="city" data-test-id="checkout-city" />

          <label htmlFor="postal-code">postal code</label>
          <input id="postal-code" data-test-id="checkout-postal-code" />

          <label htmlFor="country">Country</label>
          <input id="country" data-test-id="checkout-country" />
          <hr />
          <label htmlFor="credit">Credit Card</label>
          <input id="credit" data-test-id="checkout-credit-card" />

          <label htmlFor="experitation-date">CC experitation date</label>
          <input
            id="experitation-date"
            data-test-id="checkout-expiration-date"
          />

          <label htmlFor="securitycode">CC securitycode</label>
          <input id="security-code" data-test-id="checkout-security-code" />

          <label htmlFor="check">Accept T&C</label>
          <input id="check" type="checkbox" />

          <button>Confirm order</button>
        </form>
      </div>
    </section>
  );
}
