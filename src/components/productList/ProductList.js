import React from 'react';
import { Parallax } from "react-parallax";

const ProductList = ({ data }) => {
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
                        <div className="flex justify-center items-center w-full md:w-2/4">
                            <div className="text-center">
                            {product.description}
                            </div>
                        </div>
                        </div>          
                    </div>
                </Parallax>
            ))
            )}     
        </div>
    );
};

export default ProductList;