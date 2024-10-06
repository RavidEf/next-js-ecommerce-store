'use server';
import { cookies } from 'next/headers';

export default async function CreateOrUpdateCookie(toyid, quantity) {
  // 1. get current cookie
  const toyQuantityCookie = (await cookies()).get('toysCookies');

  console.log(toyQuantityCookie);

  // 2. parse the cookie value

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
    quantityToUpdate.quantity = quantity;
  }

  (await cookies()).set('toysCookies', JSON.stringify(toysQuantity));
}
// { id: toyid, quantity: quantity }]
