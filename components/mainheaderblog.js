import Image from 'next/image';
import Link from 'next/link';

export default function MainHeaderBlog ({pageHeading,pageImg}) {
    return (
      <>
        <header className="innerHeaderb bg-center h-full max-h-56" style= {{backgroundImage:"url('../images/"+pageImg+"')"}} >        
        </header>
         
      </>
    );
    }