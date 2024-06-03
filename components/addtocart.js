import { useDispatch } from 'react-redux';
import { addToCart } from './store/cartSlice';

export default function CartButton({product}){
    const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return(
    <>
         <button  onClick={handleAddToCart} className="w-[90%] flex justify-center mx-auto py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none  cursor-pointer mb-8">
                Add to Cart
              </button>
    </>
  )
}