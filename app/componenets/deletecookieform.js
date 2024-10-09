'use client';
import React from 'react';
import DeleteOneCookie from './deleteonecookie.ts';

export default function DeleteCookieForm({ toyid }) {
  return <button onClick={() => DeleteOneCookie(toyid)}>Delete item</button>;
}
