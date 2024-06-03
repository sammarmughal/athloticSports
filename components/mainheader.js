import Image from 'next/image';
import Link from 'next/link';

export default function MainHeader({ pageHeading, pageImg }) {
  return (
    <>
      <header className="innerHeader bg-center bg-no-repeat	bg-cover h-full" style={{ backgroundImage: "url('../images/" + pageImg + "')" }} >
        <h1 className='sm:text-normal text-sm h-full sm:py-0 py-6 sm:mt-0 mt-10'>{pageHeading}</h1>
        <Link href="/products" title="Products" className="showbackbtn hidden text-white hover:text-black w-auto  mt-2 absolute -bottom-3 bg-blue-400 hover:bg-opacity-100 transition-all duration-300 bg-opacity-80 border border-white rounded-full px-4 text-sm py-1 z-20 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline -mt-1 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg> Products
        </Link>
      </header>
      <svg viewBox="0 0 384 12" fill="none" aria-hidden="true" className="absolute  w-full transition"><mask id=":r1:-a" maskUnits="userSpaceOnUse" x="48" y="0" width="269" height="4"><path transform="rotate(180 316.656 4)" fill="#C4C4C4" d="M316.656 4h268v4h-268z"></path></mask><g filter="url(#:r1:-b)" mask="url(#:r1:-a)"><path transform="rotate(180 292.656 1)" fill="url(#:r1:-c)" d="M292.656 1h220v2h-220z"></path></g><mask id=":r1:-d" maskUnits="userSpaceOnUse" x="116" y="0" width="268" height="12"><path transform="rotate(180 384 12)" fill="#C4C4C4" d="M384 12h268v12H384z"></path></mask><g filter="url(#:r1:-e)" mask="url(#:r1:-d)"><path transform="rotate(180 360 1)" fill="url(#:r1:-f)" d="M360 1h220v2H360z"></path></g><defs><linearGradient id=":r1:-c" x1="292.656" y1="1" x2="512.656" y2="1" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA" stopOpacity="0"></stop><stop offset=".323" stopColor="#A78BFA"></stop><stop offset=".672" stopColor="#EC4899" stopOpacity=".3"></stop><stop offset="1" stopColor="#EC4899" stopOpacity="0"></stop></linearGradient><linearGradient id=":r1:-f" x1="360" y1="1" x2="580" y2="1" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA" stopOpacity="0"></stop><stop offset=".323" stopColor="#A78BFA"></stop><stop offset=".672" stopColor="#EC4899" stopOpacity=".3"></stop><stop offset="1" stopColor="#EC4899" stopOpacity="0"></stop></linearGradient><filter id=":r1:-b" x="71.656" y="-2" width="222" height="4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation=".5" result="effect1_foregroundBlur_311_43467"></feGaussianBlur></filter><filter id=":r1:-e" x="131" y="-10" width="238" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_311_43467"></feGaussianBlur></filter></defs></svg>
    </>
  );
}