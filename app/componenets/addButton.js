'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Header from './header';

export default function AddToCartButton() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          router.refresh(Header);
        }}
      >
        Add to Cart +++
      </button>
    </div>
  );
}
