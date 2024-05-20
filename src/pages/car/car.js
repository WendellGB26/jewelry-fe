import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CarList from '../../components/carList/carList';
import Cupon from '../../components/cupponAdvisor/cupon';
import Bill from '../../components/billComponent/bill';

function Car() {
  const carItems = useSelector((state) => state.cartItems);

  return (
    <div className='h-screen flex flex-col justify-center'>
      <a className='text-4xl text-white font-bold pl-20'>Your Cart</a>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-5 h-96 mt-10'>
        <div className='md:col-span-2 border-r px-4 flex flex-col justify-between'>
          <CarList products={carItems} />
          <Cupon className="pt-5" />
        </div>
        <div className='md:col-span-1'>
          <Bill products={carItems} />
        </div>
      </div>      
    </div>
  );
}

export default Car;
