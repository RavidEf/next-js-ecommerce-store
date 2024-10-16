import './toyid.css';
import { cookies } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { getToyInsecure } from '../../../database/toysobjects';
import { notFound } from '../../componenets/notfound';
import ToyCountForm from './ToyCountForm';

export default async function SingleToyPage(props) {
  const toy = await getToyInsecure(Number((await props.params).toyid));

  const toysQunatityCookie = (await cookies()).get('cart');

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
    <section className="toy-page">
      <div className="information-div-toy">
        <h1 className="h1-toy">
          The <b>{toy.firstName}</b>
        </h1>

        <div className="item-descruption">
          item description: {toy.description}
        </div>
        <p className="item-price" data-test-id="product-price">
          Item price: {toy.price}
          <span>€</span>
        </p>
        <ToyCountForm className="toy-form" toyid={toy.id} />
      </div>
      <div className="image-div-toy">
        <Image
          src={`/images/${toy.imageName.toLowerCase()}.png`}
          alt={toy.firstName}
          width={500}
          height={500}
          data-test-id="product-image"
        />
      </div>
      <br /> <br />
    </section>
  );
}
