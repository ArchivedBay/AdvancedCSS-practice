import React from 'react'
import '../styles/components/_Button.scss'

const Button = (props) => {
  return (
    <a href="#" className='btn btn--white btn--animated'>
      {props.text}
    </a>
  );
}

export default Button;