'use client';

import { useState } from 'react';
import CreateOrUpdateCookie from '../toys/[toyid]/actions';

// function to set the cookie from user input

export default function SetCookieForm() {
  const [cookieValue, setCookieValue] = useState('');

  return (
    <form>
      {/* <input
        value={cookieValue}
        onChange={(event) => setCookieValue(event.currentTarget.value)}
      /> */}
      <select
        value={cookieValue}
        onChange={(event) => setCookieValue(Number(event.currentTarget.value))}
        name="pets"
        id="pet-select"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <button formAction={() => CreateOrUpdateCookie(cookieValue)}>
        Set Cookie
      </button>
    </form>
  );
}
