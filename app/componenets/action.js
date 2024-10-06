'use server';

import { cookies } from 'next/headers';

export async function createCookie(cookieValue) {
  (await cookies()).set('testCookie', cookieValue);
}
