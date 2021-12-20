import React from 'react';

const Button = (props) => {

  const changeHandler = () => {
    if (props.text === '-') {
      props.changeBg('red');
    } else if (props.text === '+') {
      props.changeBg('green')
    }
  }

  return (
    <button onClick={() => { props.onClickHandler(); changeHandler() }}>{props.text}</button>
  );
}

export default Button;
