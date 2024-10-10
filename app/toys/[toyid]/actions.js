'use server';
import { cookies } from 'next/headers';

export default async function CreateOrUpdateCookie(toyid, quantity) {
  // 1. get current cookie
  const toyQuantityCookie = (await cookies()).get('cart');

  // 2. parse the cookie value (make it an object)

  const toysQuantity = !toyQuantityCookie
    ? []
    : JSON.parse(toyQuantityCookie.value);

  // 3. if we find a cookie we set the cookie
  const quantityToUpdate = toysQuantity.find((toyQuantityCookieSingular) => {
    return toyQuantityCookieSingular.id === toyid;
  });

  if (!quantityToUpdate) {
    toysQuantity.push({ id: toyid, quantity: quantity });
  } else {
    quantityToUpdate.quantity = quantity + quantity;
  }
  // 4. we overwrite the cookie
  (await cookies()).set('cart', JSON.stringify(toysQuantity));
}
// { id: toyid, quantity: quantity }]
