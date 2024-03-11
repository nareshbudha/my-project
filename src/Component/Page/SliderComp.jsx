import React, { useState } from "react";

const SliderComp = () => {
  const [value, setValue] = useState(0); // Initial value of the slider

  // Function to handle slider value change
  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className=" w-64 mx-auto mt-10 ml-15 relative">
      <input
        type="range"
        min="1"
        max="1000"
        value={value}
        onChange={handleSliderChange}
        className=" slider bg-[#D9D9D9] text-[] w-full h-3 bg- rounded-full "
      />
      {/* Use inline style to position the displayed value */}
      <div
        className="bg-[#5F2466] text-[#FFFFFF] whitespace-nowrap	 absolute top-0 py-1 px-2 left-0 transform -translate-x-full -translate-y-full rounded-full"
        style={{ left: `calc(${value / 10}% )` }}
      >
        {value} items
      </div>
    </div>
  );
};

export default SliderComp;
