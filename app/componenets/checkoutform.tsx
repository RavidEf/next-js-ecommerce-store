'use client';
import '../cart/checkout/checkoutform.css';
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
      <div className="checkout-div">
        <form className="checkout-form" onSubmit={handelSubmit}>
          <h2>Fill out the form</h2>
          <label htmlFor="fName">First Name</label>
          <input
            id="fName"
            data-test-id="checkout-first-name"
            required
            placeholder="Marco"
          />

          <label htmlFor="LName">Last Name</label>
          <input
            id="LName"
            data-test-id="checkout-last-name"
            required
            placeholder="Polo"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            data-test-id="checkout-email"
            required
            placeholder="marco.polo@upleveled.com"
          />

          <label htmlFor="address">Address</label>
          <input
            id="address"
            data-test-id="checkout-address"
            required
            placeholder="ringstrasse 1"
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            data-test-id="checkout-city"
            required
            placeholder="Vienna"
          />

          <label htmlFor="postal-code">postal code</label>
          <input
            id="postal-code"
            data-test-id="checkout-postal-code"
            required
            placeholder="80200"
          />

          <label htmlFor="country">Country</label>
          <input
            id="country"
            data-test-id="checkout-country"
            required
            placeholder="Austria"
          />
          <hr />

          <label htmlFor="credit">Credit Card</label>
          <input
            id="credit"
            data-test-id="checkout-credit-card"
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength={16}
            placeholder="xxxx xxxx xxxx xxxx"
            required
          />

          <label htmlFor="experitation-date">CC experitation date</label>
          <select name="expireMM" className="expireMM" required>
            <option value="">Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select name="expireYY" className="expireYY" required>
            <option value="">Year</option>
            <option value="20">2024</option>
            <option value="21">2025</option>
            <option value="22">2026</option>
            <option value="23">2027</option>
            <option value="24">2028</option>
          </select>
          <input
            className="inputCard"
            type="hidden"
            name="expiry"
            id="expiry"
            required
          />

          <label htmlFor="securitycode">CC securitycode</label>
          <input
            id="security-code"
            data-test-id="checkout-security-code"
            type="text"
            required
            placeholder="234"
          />

          <label htmlFor="check">Accept T&C</label>
          <input
            id="check"
            className="checkbox-checkout"
            type="checkbox"
            required
          />

          <button className="confirm-btn">Confirm order</button>
        </form>
      </div>
    </section>
  );
}
