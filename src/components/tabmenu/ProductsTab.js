import React, { useState, useEffect } from 'react';
import './ProductsTab.css';

import { useDispatch } from 'react-redux';
import { setGlobalVariable } from '../../actions/TabAccesory/actions';

const ProductsTab = ({ options, onTabChange }) => {
    const [activeTab, setActiveTab] = useState('Shirts');
    const [parsedOptions, setParsedOptions] = useState([]);
    const dispatch = useDispatch();

    const handleupdateAccesory = (newAccesoryState) => {
        dispatch(setGlobalVariable('accesory', newAccesoryState));
    };

    const handleTabClick = (tabValue) => {
        setActiveTab(tabValue);
        // Update global accesory
        handleupdateAccesory(tabValue)
        // Llama a la función de devolución de llamada con el valor del tab
        onTabChange(tabValue);
    };

    useEffect(() => {
        setParsedOptions(JSON.parse(options))
    }, []);

    return (
        <div className='flex flex-row tab-product-menu pt-5'>
            {parsedOptions.map((option) => (
                <div className={`selected-tab flex py-2 justify-center ${activeTab === option.link ? 'active' : ''}`} key={option.id}>
                    <button
                        onClick={() => handleTabClick(option.link)}
                    >
                        {option.link}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductsTab;