import { useEffect, useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const CartIcon = () => {
  const [isMounted, setIsMounted] = useState(false);
  const count = useSelector((state) => state.cart.count);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative inline-flex items-center text-sm font-semibold leading-5 transition duration-150 ease-in-out">
      <Link href="/cart" className="ml-1">
        <BsCart3 className="text-gray-200 hover:border-2 rounded-xl hover:border-[#01b8ee] hover:rounded-xl p-1 hover:text-[#01b8ee] w-10 h-10 flex items-center justify-center duration-300" />
        {isMounted && count > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {count}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;
