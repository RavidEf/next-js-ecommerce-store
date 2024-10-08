// import 'server-only';

export const dummyObj = [
  {
    id: 1,
    firstName: 'Fluffy Bird',
    imageName: 'bird',
    type: 'Cat-toy',
    description: 'Fluffy brid toy that cats love to play with',
    price: 3,
  },
  {
    id: 2,
    firstName: 'Bouncy ball',
    imageName: 'bouncy',
    type: 'Cat-toy',
    description: 'Fluffy brid toy that cats love to play with',
    price: 5,
  },
  {
    id: 3,
    firstName: 'Exercise wheel',
    imageName: 'wheel',
    type: 'Cat-toy',
    description: 'Fluffy brid toy that cats love to play with',
    price: 25,
  },
  {
    id: 4,
    firstName: 'Scratch bed',
    imageName: 'bed',
    type: 'Cat-toy',
    description: 'Fluffy brid toy that cats love to play with',
    price: 10,
  },
  {
    id: 5,
    firstName: 'Laser pointer',
    imageName: 'laser',
    type: 'Cat-toy',
    description: 'Fluffy brid toy that cats love to play with',
    price: 13,
  },
];

export function getToys() {
  return dummyObj;
}

export function getToy(id) {
  return dummyObj.find((toy) => toy.id === id);
}
