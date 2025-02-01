'use client';

import { Radius } from 'lucide-react';
import React, { CSSProperties, useState } from 'react';

const LeftSideTextTwo = () => {
  // State to keep track of the quantity
  const [quantities, setQuantities] = useState([0, 0, 0]);

  // Array of item names
  const itemNames = ['Chicken Gravy Rice', 'Buff Gravy Rice', 'Veg Gravy Rice'];

  // Function to decrease quantity
  const decreaseQuantity = (index: number) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index && q > 0 ? q - 1 : q))
    );
  };

  // Function to increase quantity
  const increaseQuantity = (index: number) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index ? q + 1 : q))
    );
  };

  return (
    <div style={containerStyle}>

      
      <div style={textStyle}>Fried Rice</div>

      {/* Image element */}
      <img
        src="/pictures/Friedrice.png"
        alt="Laphing"
        style={imageStyle}
      />

      {/* Rows */}
      {quantities.map((quantity, index) => (
        <div style={buttonContainerStyle} key={index}>
          <span style={itemNameStyle}>{itemNames[index]}</span>
          <span style={plateStyle}>Per Set</span>
          <span style={priceStyle}>$5</span>

          {/* Quantity Controls */}
          <div style={quantityContainerStyle}>
            <span
              style={quantityButtonStyle}
              onClick={() => decreaseQuantity(index)}
            >
              -
            </span>
            <div style={quantityBoxStyle}>{quantity}</div>
            <span
              style={quantityButtonStyle}
              onClick={() => increaseQuantity(index)}
            >
              +
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

// Styles
const containerStyle = {
  position: 'relative' as const,
};



const textStyle = {
  position: 'absolute' as const,
  left: '140px',
  transform: 'translateY(-50%)',
  fontSize: '17px',
  fontWeight: 'bold',
  color: '#333',
  marginTop: '40px',
  fontFamily: "'Montserrat', sans-serif",
};

const imageStyle = {
  width: '80px',
  height: 'auto',
  margin: '10px auto', // Centering the image horizontally and adding margin
  display: 'block',    // Ensures the image is visible
  marginLeft: '135px',
  marginTop: '55px',
  borderRadius: '20px',
};

// The wrapper container for each row
const buttonContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start', // Align all elements to the left
  width: '100%',
  marginTop: '8px', // Adjust space between rows
};

const itemNameStyle: CSSProperties = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#555',
  cursor: 'pointer',
  fontFamily: "'Montserrat', sans-serif",
  whiteSpace: 'normal', // Allows the text to break into multiple lines
  overflow: 'hidden',
  wordWrap: 'break-word', // Breaks long words if needed
  width: '150px', // Ensures that text doesn't overflow
  display: 'inline-block',
};

const plateStyle = {
  fontSize: '14px',
  color: '#777',
  fontFamily: "'Montserrat', sans-serif",
  whiteSpace: 'nowrap',
  marginRight: '18px',
};

const priceStyle = {
  fontSize: '14px',
  color: '#777',
  fontFamily: "'Montserrat', sans-serif",
  whiteSpace: 'nowrap',
};

const quantityContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20px', // Adds space before the quantity control
};

const quantityButtonStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#555',
  cursor: 'pointer',
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRadius: '4px',
  margin: '0 5px',
};

const quantityBoxStyle = {
  fontSize: '14px',
  color: '#333',
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

export default LeftSideTextTwo;