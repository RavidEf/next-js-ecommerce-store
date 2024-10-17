import './footer.css';
import instagram from 'C:/Users/efron/projects/next-js-ecommerce-store/public/images/instagram-icon.png';
import linkedin from 'C:/Users/efron/projects/next-js-ecommerce-store/public/images/linkedin-icon.png';
import twitter from 'C:/Users/efron/projects/next-js-ecommerce-store/public/images/twitter-icon.png';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <ul>
          <li className="discplaimer">
            <span>
              <b>Disclaimer</b>: the products presented are fake products and
              are for practice purpose only
            </span>
          </li>
          <li className="linkedin">
            <Link
              href="https://www.linkedin.com/in/ravid-efroni/"
              target="_blank"
            >
              <Image src={linkedin} alt="twitter icon" width={50} height={50} />
            </Link>
          </li>
          <li className="twitter">
            <Link href="https://x.com/ravidefroni" target="_blank">
              <Image src={twitter} alt="twitter icon" width={50} height={50} />
            </Link>
          </li>
          <li className="instagram">
            <Link href="https://www.instagram.com/ravidolife/" target="_blank">
              <Image
                src={instagram}
                alt="instagram icon"
                width={50}
                height={50}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
