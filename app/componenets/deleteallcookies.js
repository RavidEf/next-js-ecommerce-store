'use server';

import { cookies } from 'next/headers';

export default async function DeleteAllCookies(toyid) {
  const toyQuantityCookie = (await cookies()).get('cart');

  // 2. parse the cookie value (make it an object)

  const toysQuantity =
    toyQuantityCookie && toyQuantityCookie.value
      ? JSON.parse(toyQuantityCookie.value || '[]')
      : [];

  // 3. if we find a cookie we set the cookie
  const quantityToUpdate = toysQuantity.find((toyQuantityCookieSingular) => {
    return toyQuantityCookieSingular.id === toyid;
  });

  if (!quantityToUpdate) {
    toysQuantity.push({ id: '', quantity: '' });
  } else {
    toysQuantity.push({ id: '', quantity: '' });
  }
  // 4. we overwrite the cookie
  (await cookies()).delete('cart', JSON.stringify(toysQuantity));
}
