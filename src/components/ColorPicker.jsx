import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("");

  const changeColor = (e) => {
    let newColor = e.target.value;
    setColor(newColor);
  };

  return (
    <div className="m-auto text-center mt-16">
      <h1 className="mb-5 text-green-500 font-bold text-3xl">Color Picker</h1>
      <input
        type="text"
        value={color}
        className="border"
        onChange={changeColor}
      />

      <div
        className="w-36 h-36 border m-auto mt-9"
        style={{ background: color || "transparent" }}
      ></div>

      <div className="mt-4 font-bold text-gray-500">
        <h1>
          Selected Color:{" "}
          <span className="inline-block">{color || "nothing"}</span>
        </h1>
      </div>
    </div>
  );
};

export default ColorPicker;
