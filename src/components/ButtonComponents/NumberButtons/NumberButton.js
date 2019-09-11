import React from "react";


const NumberButton = (proper) => {
  // console.log('props', props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button class="num-button"><span>{proper.val}</span></button>

    </>
  );
};

export default NumberButton;

// return(
//   <button className="color_button">
//   <span rolor='img' aria-label="heart">
//   {props.buttonV.value}
//   </span>
//   </button>
// )