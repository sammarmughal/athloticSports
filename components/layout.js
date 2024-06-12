import Head from 'next/head';
import Image from 'next/image'; 
import Link from 'next/link';
import Nav from './nav';
import Footer from './footer';
import MainHeader from './mainheader';
  
   
export default function Layout({ children , showNavAndFooter = true }) {
    
  return (
    <div className="w-full mx-auto bg-center bg-no-repeat bg-cover">
      <Head></Head>
      {showNavAndFooter && <Nav />}
      <div className="w-full   mx-auto">{children}</div>
      {showNavAndFooter && <Footer />}
    </div>
  );    

}