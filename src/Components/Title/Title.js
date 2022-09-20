import React from 'react';
import './Title.css';

function Title({title}) {
    return (
        <>
            <div className="header">
                <div className='line-1'></div>
                    <div className='line-2'></div>
                        <h5 className='header-txt'>{title}</h5>
                    <div className='line-2'></div>
                <div className='line-1'></div>
            </div>
        </>
    )
}

export default Title
