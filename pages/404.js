import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";

export default function Disclamier() {
 
    return (
      <>
        <MainHeader pageHeading="404" />

        <section className="main-sec">
          <div className="content-bx">
             
          

            <div className="flex justify-center items-center">
            <Link href="/" className="text-xl font-bold uppercase text-gray-500">BACK to HOME</Link>
</div>


          </div>
        </section>
      </>
    );
  }