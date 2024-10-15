'use client';
import './remove-item.css';
import React from 'react';
import DeleteOneCookie from './deleteonecookie.ts';

export default function DeleteCookieForm({ toyid }) {
  return (
    <div>
      {' '}
      <button className="remove-button" onClick={() => DeleteOneCookie(toyid)}>
        Remove
      </button>
    </div>
  );
}
