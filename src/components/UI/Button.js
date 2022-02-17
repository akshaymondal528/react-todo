import React from 'react';
import './Button.css';

const Botton = props => {
  return (
    <button className="btn" type="submit" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Botton;
