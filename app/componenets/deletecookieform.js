'use client';
import './remove-item.css';
import React from 'react';
import DeleteOneCookie from './deleteonecookie.js';

export default function DeleteCookieForm({ toyid }) {
  return (
    <div>
      {' '}
      <button
        className="remove-button"
        onClick={() => DeleteOneCookie(toyid)}
        data-test-id="cart-product-remove-<product id>"
      >
        Remove
      </button>
    </div>
  );
}
