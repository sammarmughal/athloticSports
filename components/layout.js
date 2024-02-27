import Head from 'next/head';
import Image from 'next/image'; 
import Link from 'next/link';
import Nav from './nav';
import Footer from './footer';
import MainHeader from './mainheader';
  
   
export default function Layout({ children }) {
    
  return (
    <div className="w-full mx-auto bg-center bg-no-repeat bg-cover">
      {/*style= {{backgroundImage:"url('../images/svgexport-3.svg'),url('../images/svgexport-5.svg')"}}*/}
      <Head></Head>
      <Nav />
      <div className="w-full   mx-auto">{children}</div>
      <Footer/>
    </div>
  );    

}