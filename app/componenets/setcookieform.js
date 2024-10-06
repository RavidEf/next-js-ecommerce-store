'use client';

import { useState } from 'react';
import { createCookie } from './action';

// function to set the cookie from user input

export default function SetCookieForm() {
  const [cookieValue, setCookieValue] = useState('');

  return (
    <form>
      <input
        value={cookieValue}
        onChange={(event) => setCookieValue(event.currentTarget.value)}
      />
      <button formAction={() => createCookie(cookieValue)}>Set Cookie</button>
    </form>
  );
}
