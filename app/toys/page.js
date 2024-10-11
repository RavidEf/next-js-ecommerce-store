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
      <h1>The full Catto selection</h1>
      <h3>Here are the products you can purchase in this store</h3>
      <br />
      <br />
      <div>
        <h2>Most wanted cat toys</h2>
        {toys.map((toy) => {
          return (
            <div className="toys-container" key={`toys-${toy.id}`}>
              <div className="toys-block">
                <Link href={`/toys/${toy.id}`}>
                  <div>{toy.firstName}</div>
                  <Image
                    src={`/images/${toy.imageName.toLowerCase()}.png`}
                    alt={toy.firstName}
                    width={75}
                    height={75}
                  />
                </Link>
                <div />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
