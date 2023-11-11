"use client";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

const Counter = ({ step, label, inputValue, setInputValue }) => {
  const incrementHandler = () => {
    setInputValue((prevInputValue) => prevInputValue + step);
  };

  const decrementHandler = () => {
    setInputValue((prevInputValue) =>
      prevInputValue - step > 0 ? prevInputValue - step : 0
    );
  };

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10); // تبدیل مقدار ورودی به عدد صحیح
    if (!isNaN(newValue)) {
      setInputValue(newValue);
    }
  };

  return (
    <div className="flex justify-between items-center gap-3 mb-5">
      <button type="button" onClick={incrementHandler}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.05"
            x="1"
            y="1"
            width="40"
            height="40"
            rx="20"
            stroke="black"
          />
          <rect x="15" y="20" width="12" height="2" rx="1" fill="black" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 15.75V26.25C22 26.6642 21.5523 27 21 27C20.4477 27 20 26.6642 20 26.25V15.75C20 15.3358 20.4477 15 21 15C21.5523 15 22 15.3358 22 15.75Z"
            fill="black"
          />
        </svg>
      </button>
      <NumericFormat
        thousandSeparator=","
        className="text-center bg-transparent w-20 h-10"
        placeholder="0"
        value={inputValue}
        onChange={() => handleInputChange()}
      />
      <label className="text-color-light text-xl text-right flex-1">
        {label}
      </label>
      {inputValue > 0 ? (
        <button type="button" onClick={decrementHandler}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.05"
              x="1"
              y="1"
              width="40"
              height="40"
              rx="20"
              stroke="black"
            />
            <rect x="15" y="20" width="12" height="2" rx="1" fill="black" />
          </svg>
        </button>
      ) : (
        <span className="block w-12"></span>
      )}
    </div>
  );
};

export default Counter;
