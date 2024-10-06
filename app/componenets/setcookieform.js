'use client';

import { useState } from 'react';
import CreateOrUpdateCookie from '../toys/[toyid]/actions';

// function to set the cookie from user input

export default function SetCookieForm() {
  const [cookieValue, setCookieValue] = useState('');

  return (
    <form>
      <input
        value={cookieValue}
        onChange={(event) => setCookieValue(event.currentTarget.value)}
      />
      <button formAction={() => CreateOrUpdateCookie(cookieValue)}>
        Set Cookie
      </button>
    </form>
  );
}
