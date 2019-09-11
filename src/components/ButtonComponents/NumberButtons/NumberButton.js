import React from "react";


const NumberButton = (proper) => {
  // console.log('props', props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button class="num-button">{proper.val}</button>

    </>
  );
};

export default NumberButton;