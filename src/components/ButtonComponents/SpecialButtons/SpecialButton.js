import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="Spec_Button calc_button">
      {props.button}
    </button>
  );
};

export default SpecialButton;
