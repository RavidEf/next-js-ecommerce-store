'use server';
import { cookies } from 'next/headers';

export default async function DeleteOneCookie(toyid: number) {
  // 1. get current cookie
  const toyQuantityCookie = (await cookies()).get('cart');

  // 2. parse the cookie value (make it an object)

  const toysQuantity = !toyQuantityCookie
    ? []
    : JSON.parse(toyQuantityCookie.value);

  // Filter out the toy with the matching id
  const updatedToysQuantity = toysQuantity.filter(
    (toy: { id: number }) => toy.id !== toyid,
  );
  // save the updated cookie with the set cookie func
  (await cookies()).set('cart', JSON.stringify(updatedToysQuantity));
}
