import React from 'react';
import ActionButtons from '../components/ActionButtons';
import MyOrderButton from '../components/myorder';
import FoodMenu from '../components/foodmenu';
import FoodItems from '../components/fooditems';

export default function HomePage() {
  return (
    <div style={containerStyle}>
      
      <div style={yellowBoxStyle}>
        <button style={buttonStyle}>
          Categories <img src="/red_button.svg" alt="icon" style={iconStyle} />
        </button>
      </div>
      <MyOrderButton />
      <FoodMenu />
      <div style={boxStyle}>
        <button style={buttonStyleRight}>Available items</button>
      </div>
      <ActionButtons />
      <FoodItems/>
    </div>
  );
}

// Styles defined and cast to React.CSSProperties
const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column', // Stack elements vertically
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  height: '100vh',
  paddingTop: '80px',
  paddingLeft: '20px', // Add padding as needed for alignment
  backgroundColor: '#F2F2F0',
};

const yellowBoxStyle: React.CSSProperties = {
  backgroundColor: '#F5B849', // Yellow box color
  borderRadius: '10px', // Optional: round corners
  padding: '10px -15px', // Padding inside the yellow box
  display: 'inline-flex', // Align content inline within the box
  alignItems: 'center',
  marginBottom: '20px', // Optional: Space below the yellow box
  marginTop: '10px',
  marginLeft: '-25px',
};

const buttonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px 24px',
  fontSize: '14px',
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 600,
  cursor: 'pointer',
  backgroundColor: 'transparent', // Remove button background to show yellow box
  border: 'none', // Remove button border
  color: 'black',
  textAlign: 'right', // Align text to the right inside the button
};

const boxStyle: React.CSSProperties = {
  // Adjust styling as needed
};

const buttonStyleRight: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px 24px',
  fontSize: '14px',
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 600,
  cursor: 'pointer',
  marginTop: '10px',
  marginLeft: '210px',
  backgroundColor: 'transparent', // Light dark grey for pressed effect
  color: '#FF4500', // Keep text white for contrast
  borderRadius: '10px',
  border: 'none', // Remove any border
  textShadow: '1px 2px 4px rgba(0, 0, 0, 0.4)',
  boxShadow: 'none', // Softer shadow effect
  transform: 'translateY(2px)', // Sunken effect to simulate the button being pressed
  transition: 'all 0.3s ease', // Smooth transition for shadow and movement
};

const iconStyle: React.CSSProperties = {
  width: '15px',
  height: '15px',
  marginLeft: '7px',
};
