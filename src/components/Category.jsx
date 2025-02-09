import React, { useState } from 'react';

export default function Category({ onchangeCategory }) {
    const [category, setCategory] = useState('');

    const choseCategory = (e) => {
        setCategory(e.target.value);
        onchangeCategory(e.target.value);
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
        padding: "5px 0",
        transition: "color 0.3s ease",
    };

    return (
        <div className="up" style={{ padding: "20px" }}>
            <b>
                <label htmlFor="Category" style={{ fontSize: "18px", marginBottom: "1px", display: "inline-block" ,fontSize: "25px", fontWeight: "500",color:'#6892d5' }}>
                    Category
                </label>
            </b>
            <br />
            <div style={{ display: "flex", flexDirection: "column",gap:'6px',marginLeft:'20px'}}>
                {["", "beauty", "fragrances", "furniture", "groceries"].map((cat) => (
                    <label key={cat} style={labelStyle}>
                        {/* Visually hidden radio button */}
                        <input
                            type="radio"
                            name="radios_1"
                            value={cat}
                            checked={category === cat}
                            onChange={choseCategory}
                            style={{
                                position: "absolute",
                                opacity: 0,
                                pointerEvents: "none",
                            }}
                        />
                        {/* Custom radio button */}
                        <span style={radioStyle(category === cat)}></span>
                        <span style={{ marginLeft: "12px",fontSize: "18px", fontWeight: "500"  }}>
                            {cat === "" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
}
