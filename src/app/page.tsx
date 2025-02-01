import React from 'react';
import ActionButtons from '../components/ActionButtons';
import MyOrderButton from '../components/myOrderButton';
import FoodMenu from '../components/foodmenu';


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
      <ActionButtons />      
    </div>
  );
}

// Styles defined and cast to React.CSSProperties
const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column', // Stack elements vertically
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  minHeight: '200vh', // Ensure extra height for scrolling
  paddingTop: '80px',
  paddingLeft: '20px', // Add padding as needed for alignment
  backgroundColor: '#fdd7a2',
  overflowY: 'auto', // Enable vertical scrolling
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
const iconStyle: React.CSSProperties = {
  width: '15px',
  height: '15px',
  marginLeft: '7px',
};
