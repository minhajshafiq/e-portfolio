import React from 'react';
import './button.scss';

function Button(props) {
  return (
    <button className="button">
      {props.label}
    </button>
  );
}

export default Button;