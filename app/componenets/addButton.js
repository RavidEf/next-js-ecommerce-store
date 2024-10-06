/* 'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function AddToCartButton(Header) {
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
 */
