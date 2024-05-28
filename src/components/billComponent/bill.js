import React from "react";
import styles from "./bill.module.css"
import { FaArrowLeft } from "react-icons/fa";

const bill = ({ products }) => {
  const getSubtotal = () => {
    return products.reduce((acc, product) => acc + product.price, 0);
  };

  const getTotal = () => {
    const subtotal = getSubtotal();
    // Agrega aquí cualquier otro cargo adicional, como impuestos o envío.
    return subtotal;
  };

  return (
    <div className={`${styles.productListContainer} px-4 h-full`}>
        <div className="w-full h-full">
            <div className="w-full border-b-2 pb-4">
                <a className="text-4xl text-black font-bold">Cart Totals</a>  
            </div>
            <div className="w-full flex flex-row justify-between py-2">
                <a className="text-black">Subtotal:</a>
                <a className="text-black font-bold">${getSubtotal().toFixed(2)}</a>            
            </div>
            <div className="w-full flex flex-row justify-between py-2">
                <a className="text-black">Total:</a>
                <a className="text-black font-bold">${getSubtotal().toFixed(2)}</a>            
            </div>            
        </div>

        <div className="flex flex-col">
            <button className={`${styles.btn}`}>Proceed to checkout</button>
            <button className="flex flex-wrap justify-center"><FaArrowLeft className="text-black pr-2 self-center text-base"/><a className="text-black text-base" href="/products/caballero">Continue Shopping</a></button>            
        </div>
        


    </div>
  );
};

export default bill;