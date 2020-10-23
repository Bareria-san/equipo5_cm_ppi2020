import React from 'react';
import './Label.css';

const Label = ({ text }) => {
    return (
        <div>
            <label className = 'xdx'> {text} </label>
        </div>
    )
};

export default Label;