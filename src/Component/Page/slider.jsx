import React, { useState } from "react";

const sliderss= () => {
  const [value, setValue] = useState(0); // Initial value of the slider

  // Function to handle slider value change
  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="  mx-7 relative my-5">
      <input
        type="range"
        min="5"
        max="1000"
        value={value}
        onChange={handleSliderChange}
        className=" slider bg-[#D9D9D9] rounded-full "
      />
      {/* Use inline style to position the displayed value */}
      <div
        className="bg-[#5F2466] px-2 py-1 text-[#FFFFFF] whitespace-nowrap ml-12	 absolute top-0 left-0 transform -translate-x-full -translate-y-[150%] rounded-full"
        style={{ left: `calc(${value / 10}% )` }}
      >
        {value} hours
      </div>
    </div>
  );
};

export default sliderss;
