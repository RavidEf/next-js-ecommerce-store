import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getToys } from '../database/toysobjects';

export const metadata = {
  title: 'Toys',
  description: 'The TOYS page for the Cattos store',
};

// {`/public/${toy.firstName.toLowerCase()}.jpg`}
export default function ToysPage() {
  const toys = getToys();

  return (
    <div>
      <h1>The full Catto selection</h1>
      <h3>Here are the products you can purchase in this store</h3>
      <br />
      <br />

      <div>
        <h2>Most wanted cat toys</h2>
        {toys.map((toy) => {
          return (
            <div key={`toys-${toy.id}`}>
              <Link href={`/toys/${toy.id}`}>
                <div>{toy.firstName}</div>
                <Image
                  src={`/images/${toy.imageName.toLowerCase()}.jpg`}
                  alt={toy.firstName}
                  width={200}
                  height={200}
                />
                <div>{toy.description}</div>
                <hr />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
