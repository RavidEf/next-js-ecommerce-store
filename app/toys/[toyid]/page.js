import Image from 'next/image';
import React from 'react';
import { notFound } from '../../componenets/notfound';
import { getToy } from '../../database/toysobjects';
import ToyCountForm from './ToyCountForm';

export default async function SingleToyPage(props) {
  console.log(props);

  const toy = getToy(Number((await props.params).toyid));

  console.log(toy);

  if (!toy) {
    return notFound();
  }

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
      <div>{toy.description}</div>
      <div>here should be the form</div>
      <toyCountForm />
      <br /> <br />
    </section>
  );
}
