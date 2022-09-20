import React from 'react';
import './Label.css'

function Textarea({ Txt, types }) {
    return (
        <>
            <div className="label-container">
                <label className='label-style'>
                    {Txt}
                </label>
                <textarea className='label-textarea' type={types} />
            </div>
        </>
    )
}

export default Textarea