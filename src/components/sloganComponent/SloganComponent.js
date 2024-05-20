import React, {useState, useEffect} from 'react';
import { FaChessQueen, FaHandSparkles, FaRegGem, FaRegGrinStars, FaStar, FaClock } from 'react-icons/fa';
import HeroImage from '../../assets/images/HeroImage.png';

const SloganComponent = ({ isMobile, scrollY, windowHeight }) => {

    const isCenterOfScreen = () => {
        return scrollY > windowHeight / 1.6 && scrollY < windowHeight * 3; // Ajusta el factor de 1.5 según sea necesario
    };

    return (
        <div className="slogan-container h-auto w-full">
            <a className="flex justify-center font-bold text-4xl py-4 text-center text-textActive font-dancing underline underline-offset-8">Elegancia Atemporal, Encanto Eterno</a>
            <div className='flex flex-col md:flex-row justify-between items-start p-20' style={{ height: isMobile ? '850px' : '450px' }}>
                <div className='flex flex-col justify-center text-start md:text-left md:w-1/3 h-full'>
                    <div className='flex flex-col w-full min-h-72 max-h-auto text-start md:text-left mx-auto'>
                        <div className="flex items-center mb-2">
                            <FaChessQueen className="text-textActive mr-4" />
                            <div className='flex flex-col'>
                                <a className="text-textActive font-extrabold py-2 text-base md:text-base">Artesanía Inigualable</a>
                                <a className="text-sm md:text-sm">Descubre la perfección en cada detalle de nuestras piezas únicas.</a>
                            </div>
                        </div>
                        <div className="flex items-center mb-2">
                            <FaHandSparkles className="text-textActive mr-4" />
                            <div className='flex flex-col'>
                                <a className="text-textActive font-extrabold py-2 text-base md:text-base">Belleza que Trasciende</a>
                                <a className="text-sm mb-2 md:text-sm">Joyería diseñada para acompañarte en cada etapa de la vida.</a>
                            </div>
                        </div>
                        <div className="flex items-center mb-2">
                            <FaRegGem className="text-textActive mr-4" />
                            <div className='flex flex-col'>
                                <a className="text-textActive font-extrabold py-2 text-base md:text-base">Brillo que Fascina</a>
                                <a className="text-sm md:text-sm">Diseños que capturan miradas y dejan una impresión duradera.</a>
                            </div>
                        </div>
                    </div>
                </div>
                {!isMobile && (
                    <div className={`flex flex-col items-center md:w-1/3 h-full relative bottom-20`} >
                        <img src={HeroImage} className='max-w-full h-auto' style={{ transform: isCenterOfScreen() ? `translateY(${scrollY * 0.262}px)` : 'none' }}/>
                    </div>
                )}
                <div className='flex flex-col justify-center md:w-1/3 h-full'>
                    <div className='flex flex-col w-full h-72 text-start md:text-left mx-auto'>
                        <div className="flex items-center mb-2">
                            <FaRegGrinStars className="text-textActive mr-4" />
                            <div className='flex flex-col'>
                                <a className="text-textActive font-extrabold py-2 text-base md:text-base">Estilo que Inspira</a>
                                <a className="text-sm md:text-sm">Encuentra tu propia expresión de sofisticación y gracia.</a>
                            </div>
                        </div>
                        <div className="flex items-center mb-2">
                            <FaStar className="text-textActive mr-4" />
                            <div className='flex flex-col'>
                                <a className="text-textActive font-extrabold py-2 text-base md:text-base">Calidad que Brilla</a>
                                <a className="text-sm mb-2 md:text-sm">Piezas elaboradas con los más altos estándares de excelencia.</a>
                            </div>
                        </div>
                        <div className="flex items-center mb-2">
                            <FaClock className="text-textActive mr-4" />
                            <div className='flex flex-col'>
                                <a className="text-textActive font-extrabold py-2 text-base md:text-base">Pasión por lo Exclusivo</a>
                                <a className="text-sm md:text-sm">Diseños únicos que reflejan tu individualidad y buen gusto.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SloganComponent;
