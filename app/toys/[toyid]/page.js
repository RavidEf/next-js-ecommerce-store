'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { notFound } from '../../componenets/notfound';
import { getToy } from '../../database/toysobjects';

export default async function SingleToyPage(props) {
  const [quantity, setQuantity] = useState(0);

  console.log(props);

  const toy = getToy(Number((await props.params).toyid));

  console.log(toy);

  if (!toy) {
    return notFound();
  }

  function handelSubmit(event) {
    event.preventDefault();
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
      <div>
        <form onSubmit={handelSubmit}>
          <p>Item quntity: </p>
          <button>add more items</button>
        </form>
      </div>
      <br /> <br />
    </section>
  );
}
