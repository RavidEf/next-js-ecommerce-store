'use server';

import { cookies } from 'next/headers';

export default async function DeleteAllCookie(toyid, quantity) {
  (await cookies()).delete('toysCookies', quantity);
}
