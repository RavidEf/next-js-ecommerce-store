import React from 'react';
import { notFound } from '../../componenets/notfound';
import { getToy } from '../../database/toysobjects';

export default async function SingleToyPage(props) {
  console.log(props);

  const toy = getToy(Number((await props.params).toyid));

  console.log(toy);

  if (!toy) {
    return notFound();
  }

  return (
    <div>
      <h1>This is a single page for each toy</h1>
    </div>
  );
}
