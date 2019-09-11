import React from "react";

const SpecialButton = (props) => {
  console.log('props', props)
  return (
    <>

    <button className ="spe-button"><span>{props.values}</span></button>

      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
export default SpecialButton;