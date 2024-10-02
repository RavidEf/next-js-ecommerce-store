'use client';

import Image from 'next/image';
import { useState } from 'react';
import { dummyObj } from './dummyobjects';
import styles from './page.module.css';

// {`/public/${toy.firstName.toLowerCase()}.jpg`}
export default function Home() {
  return (
    <div>
      <h1>Hello world! Welcome to the the Catto store</h1>
      <h3>Here are the products you can purchase in this store</h3>
      <br />
      <br />

      <div>
        <h2>Most wanted cat toys</h2>
        {dummyObj.map((toy) => {
          return (
            <div key={`toys-${toy.id}`}>
              <div>{toy.firstName}</div>
              <Image
                src={`/images/${toy.imageName.toLowerCase()}.jpg`}
                alt={toy.firstName}
                width={200}
                height={200}
              />
              <div>{toy.description}</div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
