// pages/index.js (or index.tsx if using TypeScript)

import React from 'react';

export default function HomePage() {
  return (
    <div style={containerStyle}>
      <button style={buttonStyle}>
         Categories <img src="/red_button.svg" alt="icon" style={iconStyle}/>
        </button>
        <div style={boxStyle}>
      <button style={buttonStyleRight}>Available items</button>
      </div>
    </div>
  );
}

// Styles defined and cast to React.CSSProperties
const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  height: '100vh',
  paddingTop: '20px',
  backgroundColor: '#F2F2F0',
};

const buttonStyle: React.CSSProperties = {
  display: 'flex', // Align icon and text in a row
  alignItems: 'center', // Center icon vertically with text
  padding: '12px 24px',
  paddingLeft: '24px',
  fontSize: '18px',
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 600,
  cursor: 'pointer',
  width: '80%', // Adjusts for mobile view
  maxWidth: '200px', // Ensures button doesn’t get too wide on larger screens
  textAlign: 'left' as React.CSSProperties['textAlign'], // Explicit cast for compatibility
  color: 'black',
};

const boxStyle: React.CSSProperties = {
  backgroundColor: '#F5B849',
  borderRadius: '4px',
  display: 'flex',       // Flex display to keep the button centered inside
  alignItems: 'center',  // Align content in the middle
};

const buttonStyleRight: React.CSSProperties = {
  padding: '10px 20px',
  paddingLeft: '24px',
  fontSize: '18px',
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 600,
  cursor: 'pointer',
  width: '100%', // Adjusts for mobile view
  maxWidth: '200px', // Ensures button doesn’t get too wide on larger screens
  textAlign: 'right' as React.CSSProperties['textAlign'], // Override to align text on the right
  margin: 0,
  color: 'black',
};

const iconStyle: React.CSSProperties = {
  width: '20px', // Adjust size as needed
  height: '20px',
  marginLeft: '7px', // Space between icon and text
};

// You can add additional media query styling using CSS modules or styled-components if needed.
