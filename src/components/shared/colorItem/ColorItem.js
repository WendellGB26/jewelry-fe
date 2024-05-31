import React from 'react';

const ColorItem = ({ color }) => {
    const circleStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: color,
    };

    return (
        <div className='py-2'>
            <a className='text-textProduct font-poppins font-bold'>Colors:</a>
            <div style={circleStyle}></div>
        </div>
    );
};

export default ColorItem;