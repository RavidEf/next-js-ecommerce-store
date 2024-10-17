import './page.css';
import Image from 'next/image';
import { handelClickToToys } from './componenets/hometocart';

// {`/public/${toy.firstName.toLowerCase()}.jpg`}
export default function Home() {
  return (
    <div>
      <div className="headlines-home">
        <h1>Welcome to the the Cattos store</h1>
        <h2>Your one and only store for cat toys. </h2>
        <p>Checkout some of our happy customer and their toys below.</p>
      </div>
      <p className="cta-btn-container">
        <button className="cta-btn" onClick={handelClickToToys}>
          Shop Toys
        </button>
      </p>
      <div>
        <span className="first-row-home">
          <Image
            style={{ borderRadius: 20 }}
            src="/images/cat-fishy.jpg"
            alt="elephant"
            height={592}
            width={444}
          />
          <Image
            src="/images/cat-elephant.jpg"
            alt="elephant"
            height={592}
            style={{ borderRadius: 20 }}
            width={444}
          />
          <Image
            src="/images/cat-mouse.jpg"
            alt="elephant"
            height={592}
            style={{ borderRadius: 20 }}
            width={444}
          />
          <Image
            src="/images/cat-scratch.jpg"
            alt="elephant"
            height={592}
            style={{ borderRadius: 20 }}
            width={444}
          />
        </span>
      </div>
      <p className="cta-btn-container">
        <button className="cta-btn" onClick={handelClickToToys}>
          Shop Toys
        </button>
      </p>
    </div>
  );
}
