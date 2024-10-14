import { expect, test } from '@jest/globals';
import { combineProducts } from '../combine-product';

test('add 2 numbers', () => {
  expect(combineProducts(1, 1)).toBe(2);
});
