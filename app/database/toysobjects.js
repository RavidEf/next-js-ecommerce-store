// import 'server-only';

export const dummyObj = [
  {
    id: 1,
    firstName: 'Fluffy Bird',
    imageName: 'bird',
    type: 'Cat-toy',
    description:
      'Fluffy bird toy that cats love to play with throw around and bite on',
    price: 3,
  },
  {
    id: 2,
    firstName: 'Bouncy ball',
    imageName: 'bouncy',
    type: 'Cat-toy',
    description:
      'Bouncy ball, the ball that never stops bouncing, perfect to keep your cat busy for more than 45 minutes',
    price: 5,
  },
  {
    id: 3,
    firstName: 'Exercise wheel',
    imageName: 'wheel',
    type: 'Cat-toy',
    description:
      'The most high quality exercise wheel for cats, your cats will never be fat again after they see this wheel and use it daily',
    price: 75,
  },
  {
    id: 4,
    firstName: 'Scratch bed',
    imageName: 'bed',
    type: 'Cat-toy',
    description:
      'This bed is highly liked by our cats, they sleep on it, loaf on it and also scrutch it daily',
    price: 10,
  },
  {
    id: 5,
    firstName: 'Laser pointer',
    imageName: 'laser',
    type: 'Cat-toy',
    description:
      'High quality laser pointer your cats will love for sure, point at the wall, on the floor, make them chase it all day long',
    price: 15,
  },
  {
    id: 6,
    firstName: 'Tunnel cats',
    imageName: 'tunnel',
    type: 'Cat-toy',
    description:
      'Quality material tunnel toy, our cats love running through it, hide in it, and play with each other hide and seek with it',
    price: 12,
  },
  {
    id: 7,
    firstName: 'Mousy game',
    imageName: 'interactive-running-mouse',
    type: 'Cat-toy',
    description:
      'Interactive toy for your cats to look for treats or a hidden fully toy that looks like a mouse',
    price: 17,
  },
];

export function getToys() {
  return dummyObj;
}

export function getToy(id) {
  return dummyObj.find((toy) => toy.id === id);
}
