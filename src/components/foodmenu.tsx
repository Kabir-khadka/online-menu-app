// Add this line at the top of your file
'use client'; 

import React, { useState } from 'react';
import LeftSideText from './fooditems';
import LeftSideTextTwo from './friedrice';

const FoodMenu = () => {
  //State to track the currently active button
  const [activeButton, setActiveButton] = useState<string>('Food');

  //Function to handle button click
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName); //Set the clicked button as active
  };

  return (
    <div>
      <div style={styles.firstRowContainer}>
        {['Food', 'Momos', 'Noodles', 'Pizza'].map((item) => (
          <button
          key={item}
          onClick={() => handleButtonClick(item)}
          style={{
            ...styles.button,
            ...(activeButton === item ? styles.activeButton : {}),
          }}
        >
          <span style={styles.text}>{item}</span>
        </button>
        ))}       
      </div>
      
      <div style={styles.secondRowContainer}>
        {['Drinks', 'Snacks', 'Combos', 'Desserts'].map((item) => (
          <button
          key={item}
          onClick={() => handleButtonClick(item)}
          style={{
            ...styles.button,
            ...(activeButton === item ? styles.activeButton : {}),
          }}
          >
            <span style={styles.text}>{item}</span>
          </button>
        ))}      
      </div>

      {/* "Available items" Button */}
      <div style={styles.availableItemsContainer}>
        <button style={styles.availableItemsButton}>Available items</button>
      </div>

      <div style={styles.contentContainer}>
        {activeButton === 'Food' && (<> <LeftSideText />
      <LeftSideTextTwo />
    </>)}
        {activeButton === 'Momos' && <div>Food items content here</div>} 
        {activeButton === 'Noodles' && <div>Noodles items content here</div>} 
        {activeButton === 'Pizza' && <div>Pizza items content here</div>} 
        {activeButton === 'Drinks' && <div>Drinks items content here</div>} 
        {activeButton === 'Snacks' && <div>Snacks items content here</div>} 
        {activeButton === 'Combos' && <div>Combos items content here</div>} 
        {activeButton === 'Desserts' && <div>Desserts items content here</div>} 

      </div>
    </div>
  );
};

const styles : {
  firstRowContainer: React.CSSProperties;
  secondRowContainer: React.CSSProperties;
  button: React.CSSProperties;
  activeButton: React.CSSProperties;
  text: React.CSSProperties;
  contentContainer: React.CSSProperties; // Add this line for contentContainer
  availableItemsContainer: React.CSSProperties;
  availableItemsButton: React.CSSProperties;
} = {
  firstRowContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '-4px',
    marginLeft: '-15px',
  },
  secondRowContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px',
    marginLeft: '-12px',
  },

  button: {
    width: '85px',         // Fixed width for all buttons
    height: '40px',         // Fixed height for all buttons
    fontSize: '16px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '4px',
    background: 'none',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    background: '#444',
    color: '#fff',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  },
  text: {
    fontWeight: 'bold',
  },
  contentContainer: { // This is where we define the contentContainer style
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  availableItemsContainer: {
    
  },
  availableItemsButton: {
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
  },
};

export default FoodMenu;