import { useSelector } from 'react-redux';
import CarList from '../../components/shared/carList/carList'
import Cupon from '../../components/shared/cupponAdvisor/cupon'
import Bill from '../../components/shared/billComponent/bill';
import Checkout from '../checkout/checkout';
import { useState } from 'react';

function Car() {
  const carItems = useSelector((state) => state.cartItems);
  const [ proccedCheck, setproccedCheck ] = useState(false)

  return (
    <div className='min-h-screen w-full flex flex-wrap flex-col justify-center items-center py-10'>
      <div className='w-full md:w-4/5 lg:w-5/6 lg:h-4/5 bg-cardColor p-4 rounded-xl shadow-lg' style={{height: '120vh'}}>
        { !proccedCheck ? (
          <>
            <a className='text-2xl md:text-4xl text-textProduct font-bold pl-4 md:pl-10'>Your Cart</a>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
              <div className='md:col-span-2 border-r border-gray-300 px-4 flex flex-col justify-between'>
                <CarList products={carItems} />
                <Cupon className="pt-5" />
              </div>
              <div className='md:col-span-1'>
                <Bill products={carItems} handleButtonClick={() => setproccedCheck(true)} />
              </div>
            </div>           
          </>
        ) : (
          <Checkout/>
        )}
      </div>
    </div>
  );
}

export default Car;
