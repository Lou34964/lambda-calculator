import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="Opr_Button calc_button">
      {props.button.char}
    </button>
  );
};

export default OperatorButton;