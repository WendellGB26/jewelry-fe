import { useSelector } from 'react-redux';
import Order from '../../components/shared/order/order';
import Bill from '../../components/shared/billComponent/bill';
import { useEffect } from 'react';

function Checkout({products}) {
  const carItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
      <div className='md:col-span-2 border-r border-gray-300 px-4 flex flex-col justify-between'>
        <Order />
      </div>
      <div className='md:col-span-1'>
        <Bill products={carItems} />
      </div>
    </div> 
  );
}

export default Checkout;
