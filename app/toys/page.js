import './toys.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getToysInsecure } from '../../database/toysobjects';

export const metadata = {
  title: 'Toys',
  description: 'The TOYS page for the Cattos store',
};

// {`/public/${toy.firstName.toLowerCase()}.jpg`}
export default async function ToysPage() {
  const toys = await getToysInsecure();

  return (
    <div>
      <h1 className="toys-h1">The full Cattos selection</h1>
      <hr />
      <div className="toys-container">
        {toys.map((toy) => {
          return (
            <div className="toys-block" key={`toys-${toy.id}`}>
              <div>
                <Link
                  href={`/toys/${toy.id}`}
                  data-test-id="product-<product id>"
                >
                  <Image
                    src={`/images/${toy.imageName.toLowerCase()}.png`}
                    alt={toy.firstName}
                    width={500}
                    height={500}
                  />

                  <div className="toys-spanss">
                    <span className="toy-name">{toy.firstName}</span>
                    <span className="toy-name">{toy.price} €</span>
                  </div>
                </Link>
                <div />
              </div>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
