import './page.css';
import Image from 'next/image';

// {`/public/${toy.firstName.toLowerCase()}.jpg`}
export default function Home() {
  return (
    <div>
      <h1>Hello world! Welcome to the the Catto store</h1>
      <div>
        <span className="first-row-home">
          <Image
            src="/images/cat-fishy.jpg"
            alt="elephant"
            height={500}
            width={500}
          />
          <Image
            src="/images/cat-elephant.jpg"
            alt="elephant"
            height={500}
            width={400}
          />
          <Image
            src="/images/cat-box.jpg"
            alt="elephant"
            height={500}
            width={500}
          />
        </span>
        <span className="second-row-home">
          <Image
            src="/images/cat-mouse.jpg"
            alt="elephant"
            height={700}
            width={500}
          />
          <Image
            src="/images/cat-scratch.jpg"
            alt="elephant"
            height={600}
            width={500}
          />
          <Image
            src="/images/cat-window.jpg"
            alt="elephant"
            height={400}
            width={500}
          />
          <Image
            src="/images/cat-feather.jpg"
            alt="elephant"
            height={600}
            width={500}
          />
          <Image
            src="/images/cat-bow.jpg"
            alt="elephant"
            height={800}
            width={500}
          />
        </span>
      </div>
    </div>
  );
}
