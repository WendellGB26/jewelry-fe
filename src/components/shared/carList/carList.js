import React from 'react';
import { useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';

const CarList = ({ products }) => {
    return (
        <div className='h-60 overflow-y-auto'>
            {products.length > 0 ? (
                <table className="w-full">
                    <tbody>
                        {products.map((item) => (
                            <tr key={item.id} className='border-b border-textProduct'>
                                <td className="flex justify-center w-20 h-auto"><img src={item.imageUrl} alt={item.name} /></td>
                                <td className="text-center text-textProduct">{item.name}</td>
                                <td className="text-center text-textProduct">₡ {item.price}</td>
                                <td><FaTimes style={{ color: "red" }} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No hay artículos en el carrito</p>
            )}
        </div>
    );
};

export default CarList;
