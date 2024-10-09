import { cookies } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { notFound } from '../../componenets/notfound';
import { getToy } from '../../database/toysobjects';
import ToyCountForm from './ToyCountForm';

export default async function SingleToyPage(props) {
  const toy = getToy(Number((await props.params).toyid));

  const toysQunatityCookie = (await cookies()).get('toysCookies');

  let toysQunatity = toysQunatityCookie
    ? JSON.parse(toysQunatityCookie.value)
    : [];

  if (!toy) {
    return notFound();
  }

  if (!Array.isArray(toysQunatity)) {
    toysQunatity = [];
  }

  const toyQuantityToDisplay = toysQunatity.find((toyQuantity) => {
    return toyQuantity.id === toy.id;
  });

  console.log(toyQuantityToDisplay);

  return (
    <section>
      <div>
        <h1>
          This page is for the item: <b>{toy.firstName}</b>
        </h1>
      </div>
      <br /> <br />
      <div>{toy.firstName}</div>
      <Image
        src={`/images/${toy.imageName.toLowerCase()}.jpg`}
        alt={toy.firstName}
        width={200}
        height={200}
      />
      <p>Item price: {toy.price}€</p>
      <div>item description: {toy.description}</div>
      <br />
      <div>{/* toyQuantityToDisplay?.quantity */}</div>
      <br />
      <ToyCountForm toyid={toy.id} />
      <br /> <br />
    </section>
  );
}
