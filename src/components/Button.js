import React from 'react';

const buttonStyle = 
{
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

const Button = ({ label, onClick }) => 
{
    return (
        <button style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
