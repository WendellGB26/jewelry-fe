import React, { useEffect, useState, useRef } from 'react';
import { setCar } from '../../../actions/CarActions';
import { useDispatch } from 'react-redux';
import { FaCheck } from "react-icons/fa";
import "./ProductList.css"
import { Parallax, ParallaxLayer } from "react-parallax";
import ColorItem from "../colorItem/ColorItem";
import AddCarButton from '../buttons/AddCarButton';

const ProductList = ({ data }) => {
    const [showPopup, setShowPopup] = useState(false);
    const dispatch = useDispatch();
  
    const handleAddToCart = (product) => {
      dispatch(setCar(product));
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    };
  
    const elementsRef = useRef([]);
  
    useEffect(() => {
      const handleScroll = () => {
        elementsRef.current.forEach((el) => {
          if (el) {
            el.classList.add('slide-in');
            const rect = el.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
              el.classList.add('slide-in-visible');
            } else {
              el.classList.remove('slide-in-visible');
            }
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check on mount
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        
      };
    }, [data]);

    return (
        <div>
            {data === null ? (
            <div>Cargando...</div>
            ) : (
            data.map((product,index) => (
                <Parallax key={product.id} strength={200}>
                    <div
                        style={{
                        height: "100vh",
                        backgroundImage: "linear-gradient(rgb(6, 2, 2), rgb(55, 12, 20), rgb(137, 30, 47), rgb(55, 12, 20), rgb(6, 2, 2))",
                        backgroundSize: "100% 100vh", // Tamaño del gradiente
                        textAlign: "center",
                        paddingTop: "100px"
                        }}
                    >
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            <div
                                className="flex w-full md:w-2/4 mb-5 md:mb-0 md:pr-20 justify-center content-center slide-in"
                                ref={(el) => (elementsRef.current[index] = el)}
                            >
                                <img src={product.imageUrl} alt={product.name} className="w-3/5"/>
                            </div>
                            <div className="md:w-2/5 pl-10">
                                <div className='flex flex-col max-w-2xl justify-start items-start'>
                                    <a className='text-textProduct text-6xl font-bold font-poppins py-2 text-start max-w-2xl'>{product.name}</a>
                                    <a className='desc-text text-textProduct font-bold font-oswald py-2 text-start max-w-2xl'>{product.description}</a>
                                    <ColorItem color={'red'}/>
                                    <div className='w-full flex flex-col md:flex-row py-2 items-center justify-between'>
                                        <div className='flex md:w-auto w-full'>
                                            <a className='text-textProduct font-poppins font-bold'>Price:</a>
                                            <a className='text-textProduct font-oswald px-4'>₡ {product.price}</a>
                                        </div>
                                        <AddCarButton className="pl-auto" text={'Add Car'} handleButtonClick={() => handleAddToCart(product)} />
                                    </div>
                                </div>
                            </div>
                        </div>          
                    </div>
                </Parallax>
            ))
            )} 
            {showPopup && <div className="popup flex flex-row justify-center content-center"><FaCheck/><a className='text-lg px-2'>Artículo agregado al carrito</a></div>} 
        </div>
    );
};

export default ProductList;