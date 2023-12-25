import React from 'react';

const LiIcon = () => {
    return (
        <figure
            style={{
                position: 'absolute',
                left: -55,
                marginTop: '-22px',
                stroke: '#fff',
            }}
        >
            <svg width='75' height='75' viewBox='0 0 100 100'>
                <circle
                    cx='75'
                    cy='50'
                    r='20'
                    fill='none'
                    className='li-icon-circle1'
                />
                <circle cx='75' cy='50' r='20' className='li-icon-circle2' />
                <circle cx='75' cy='50' r='10' className='li-icon-circle3' />
            </svg>
        </figure>
    );
};

export default LiIcon;
