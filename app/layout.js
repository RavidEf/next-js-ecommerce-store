import './globals.css';
import localFont from 'next/font/local';
import Header from './componenets/header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: {
    default: 'Home | Cattos',
    template: '%s | Cattos',
  },
  description: 'Your one stop for Cat toys',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />

        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
