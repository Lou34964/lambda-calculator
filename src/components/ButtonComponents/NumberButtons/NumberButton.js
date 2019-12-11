import React from "react";

const NumberButton = (props) => {
  return (
    <button onClick = {() =>{
      props.set(props.total + props.button)
    }}
    
    className="calc_button number_button">{props.button}
      
    </button>
  );
};

export default NumberButton;