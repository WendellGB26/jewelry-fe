import React, { useState, useEffect } from 'react';
import './ProductsTab.css';

const ProductsTab = ({ options, onTabChange }) => {
    const [activeTab, setActiveTab] = useState('clocks');
    const [parsedOptions, setParsedOptions] = useState([]);

    const handleTabClick = (tabValue) => {
        onTabChange(tabValue);
        setActiveTab(tabValue);
    };

    useEffect(() => {
        setParsedOptions(JSON.parse(options))
    }, []);

    return (
        <div className='flex flex-row tab-product-menu pt-5'>
            {parsedOptions.map((option) => (
                <div className={`selected-tab flex py-2 justify-center ${activeTab === option.value ? 'active' : ''}`} key={option.id}>
                    <button
                        onClick={() => handleTabClick(option.value)}
                    >
                        {option.link}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductsTab;