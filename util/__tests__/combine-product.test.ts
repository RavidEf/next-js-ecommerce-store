import { expect, test } from '@jest/globals';
import { calculateTotalCartPrice } from '../combine-product';

test('', () => {
  expect(calculateTotalCartPrice([{ price: 5 }], [{ quantity: 2 }])).toBe(10);
  expect(calculateTotalCartPrice([{ price: 1 }], [{ quantity: 1 }])).toBe(1);
});
