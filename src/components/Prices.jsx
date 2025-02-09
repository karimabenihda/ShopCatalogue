import React, { useState } from 'react';

export default function Prices({ onchangePrice }) {
  const [price, setPrice] = useState('');

  const chosePrice = (e) => {
    setPrice(e.target.value);
    onchangePrice(e.target.value);
  };

  const radioStyle = (isChecked) => ({
    display: "inline-block",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    border: `2px solid ${isChecked ? "#6892d5" : "#ccc"}`,
    backgroundColor: isChecked ? "#6892d5" : "transparent",
    transition: "background-color 0.3s ease, border-color 0.3s ease",
    cursor: "pointer",
    boxShadow: isChecked ? "0 0 8px rgba(104, 146, 213, 0.5)" : "none",
  });

  const labelStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
    transition: "color 0.3s ease",
  };

  const priceRanges = [
    "0-10",
    "10-20",
    "20-50",
    "50-100",
    "100-500",
    "500-1000",
    "1000-3000",
  ];

  return (
    <div className="down" style={{ padding: "20px" }}>
      <b>
        <label htmlFor="Prices" style={{fontSize: "25px", fontWeight: "500",color:'#6892d5'}} >
          Prices
        </label>
      </b>
      <br />
      <div style={{ display: "flex", flexDirection: "column",gap:"7px",marginLeft:'20px'}}>
        {priceRanges.map((range) => (
          <label key={range} style={labelStyle}>
            {/* Hidden native radio button */}
            <input
              type="radio"
              name="radios_2"
              value={range}
              checked={price === range}
              onChange={chosePrice}
              style={{
                position: "absolute",
                opacity: 0,
                pointerEvents: "none",
              }}
            />
            {/* Custom radio button */}
            <span style={radioStyle(price === range)}></span>
            <span style={{ marginLeft: "12px",fontSize: "18px", fontWeight: "500"  }}>{range}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
