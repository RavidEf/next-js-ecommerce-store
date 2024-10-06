'use server';
import { cookies } from 'next/headers';
import React from 'react';
import SetCookieForm from './setcookieform.js';

// function to get the cookie

export default async function GetCookie() {
  const testCookie = (await cookies()).get('testCookie');

  console.log(testCookie);

  return (
    <>
      <div> Cookie Value: {testCookie.value}</div>
      <SetCookieForm testCookie={testCookie.value} />
    </>
  );
}
