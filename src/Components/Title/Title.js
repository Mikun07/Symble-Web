import React from 'react';
import './Title.css';

function Title({title}) {
    return (
        <>
            <div className="title-header">
                <div className='title-line-1'></div>
                    <div className='title-line-2'></div>
                        <h5 className='title-header-txt'>{title}</h5>
                    <div className='title-line-2'></div>
                <div className='title-line-1'></div>
            </div>
        </>
    )
}

export default Title
