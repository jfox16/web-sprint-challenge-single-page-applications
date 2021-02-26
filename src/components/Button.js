
import React from 'react';
import './Button.css';

const Button = (props) => {

  const { children, onClick } = props;

  return (
    <button className='Button' onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;