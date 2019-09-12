import React from "react";

const OperatorButton = (props) => {
  console.log('props', props)
  return (
    <>
      {/* {<button class="num-button">{props.val}</button> RETURNED 1,2,3,4 NOT OPERATORS} */}
      <button class="op-button"><span>{props.val.char}</span></button>


      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
export default OperatorButton;