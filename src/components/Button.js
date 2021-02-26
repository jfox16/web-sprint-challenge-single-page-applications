
import React from 'react';
import './Button.css';

const Button = (props) => {

  const { children, onClick } = props;

  return (
    <div className='Button' onClick={onClick}>
      {children}
    </div>
  )
}

export default Button;