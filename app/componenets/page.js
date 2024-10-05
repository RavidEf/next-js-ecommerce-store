import { cookies } from 'next/headers';
import React from 'react';

export default async function GetCookie() {
  const testCookie = (await cookies()).get('test');

  console.log(testCookie);

  return <div> Cookie Value: {testCookie.value}</div>;
}
