import React, {useState} from 'react';
import { setCar } from '../../actions/CarActions';
import { useDispatch } from 'react-redux';
import { FaCheck } from "react-icons/fa";
import "./ProductList.css"
import { Parallax } from "react-parallax";
import ColorItem from "../colorItem/ColorItem";
import AddCarButton from '../buttons/AddCarButton';

const ProductList = ({ data }) => {
    const [showPopup, setShowPopup] = useState(false); // Estado para controlar el popup
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(setCar(product)); // Llama a la acción addToCart
        setShowPopup(true); // Muestra el popup
        setTimeout(() => {
            setShowPopup(false); // Oculta el popup después de un cierto tiempo
        }, 2000); // 2000 ms = 2 segundos
    };

    return (
        <div>
            {data === null ? (
            <div>Cargando...</div>
            ) : (
            data.map((product,index) => (
                <Parallax key={product.id} strength={500}>
                    <div
                        style={{
                        height: "100vh",
                        backgroundImage: index % 2 === 0 
                            ? "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)" // Si el índice es par
                            : "linear-gradient(to bottom, #2c5364, #203a43, #0f2027)",
                        backgroundSize: "100% 100vh", // Tamaño del gradiente
                        textAlign: "center",
                        paddingTop: "100px"
                        }}
                    >
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            <div className="flex w-full md:w-2/4 mb-5 md:mb-0 md:pr-20 justify-center content-center">
                                <img src={product.imageUrl} alt={product.name} className="w-3/5" />
                            </div>
                            <div className="md:w-2/4 pl-16">
                                <div className='flex flex-col max-w-2xl justify-start items-start'>
                                    <a className='name-text font-frank font-bold py-2 text-start max-w-2xl'>{product.name}</a>
                                    <a className='desc-text font-frank font-bold py-2 text-start max-w-2xl'>{product.description}</a>
                                    <ColorItem color={'red'}/>
                                    <div className='w-full flex flex-col md:flex-row py-2 items-center justify-between'>
                                        <div className='flex md:w-auto w-full'>
                                            <a className='color-text font-frank font-bold'>Price:</a>
                                            <a className='color-text font-frank px-4'>₡ {product.price}</a>
                                        </div>
                                        <AddCarButton className="pl-10" text={'Add Car'} handleButtonClick={() => handleAddToCart(product)} />
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