import React from "react";

const OperatorButton = (props) => {
  console.log('props', props)
  return (
    <>
      
      <button class="num-button">{props.val.char}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
export default OperatorButton;