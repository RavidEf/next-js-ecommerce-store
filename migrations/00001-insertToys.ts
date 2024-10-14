import { Sql } from 'postgres';

const toys = [
  {
    id: 1,
    firstName: 'Fluffy Bird',
    imageName: 'bird-removebg',
    description:
      'Fluffy bird toy that cats love to play with throw around and bite on',
    price: 3,
  },
  {
    id: 2,
    firstName: 'Bouncy ball',
    imageName: 'bouncy-removebg',
    description:
      'Bouncy ball, the ball that never stops bouncing, perfect to keep your cat busy for more than 45 minutes',
    price: 5,
  },
  {
    id: 3,
    firstName: 'Exercise wheel',
    imageName: 'wheel-removebg',
    description:
      'The most high quality exercise wheel for cats, your cats will never be fat again after they see this wheel and use it daily',
    price: 75,
  },
  {
    id: 4,
    firstName: 'Scratch bed',
    imageName: 'bed-removebg',
    description:
      'This bed is highly liked by our cats, they sleep on it, loaf on it and also scrutch it daily',
    price: 10,
  },
  {
    id: 5,
    firstName: 'Laser pointer',
    imageName: 'laser-removebg',
    description:
      'High quality laser pointer your cats will love for sure, point at the wall, on the floor, make them chase it all day long',
    price: 15,
  },
  {
    id: 6,
    firstName: 'Tunnel cats',
    imageName: 'tunnel-removebg',
    description:
      'Quality material tunnel toy, our cats love running through it, hide in it, and play with each other hide and seek with it',
    price: 12,
  },
  {
    id: 7,
    firstName: 'Hidden mousey toy',
    imageName: 'interactive-running-mouse-removebg',
    description:
      'Interactive toy for your cats to look for treats or a hidden fully toy that looks like a mouse',
    price: 17,
  },
  {
    id: 8,
    firstName: 'Brocoli toy',
    imageName: 'brokkoli-removebg',
    description:
      'Your cats brocoli friend, they sleep with it, bite it and might get them to go vegan',
    price: 5,
  },
  {
    id: 9,
    firstName: 'Cat stick',
    imageName: 'cat-stick-removebg',
    description:
      'join the fun with playing with your cats and try to get them to jump to catch the feathers at the end of the stick, the love it',
    price: 5,
  },
  {
    id: 10,
    firstName: 'Heart scratch board',
    imageName: 'heart-scratcher-removebg',
    description:
      'literally the love language of your cats, the scratch board they will adore and scratch at the same time',
    price: 6,
  },
  {
    id: 11,
    firstName: 'Wooden ball',
    imageName: 'wodden-ball-removebg-preview',
    description:
      'You will be surprised but this is a best seller wodden ball cats love pushing around',
    price: 7,
  },
];

export async function up(sql: Sql) {
  for (const toy of toys) {
    await sql`
      INSERT INTO
        toys (
          first_name,
          image_name,
          description,
          price
        )
      VALUES
        (
          ${toy.firstName},
          ${toy.imageName},
          ${toy.description},
          ${toy.price},
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const toy of toys) {
    await sql`
      DELETE FROM toys
      WHERE
        id = ${toy.id}
    `;
  }
}
