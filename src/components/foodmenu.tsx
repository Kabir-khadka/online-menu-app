'use client';

import React, { useState } from 'react';
import LeftSideText from './fooditems';
import LeftSideTextTwo from './friedrice';

const FoodMenu = () => {
  // State to track the currently active button
  const [activeButton, setActiveButton] = useState<string>('Food');

  // Function to handle button click
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div style={styles.container}>
      {/* Category Buttons */}
      <div style={styles.buttonGrid}>
        {['Food', 'Momos', 'Noodles', 'Pizza', 'Drinks', 'Snacks', 'Combos', 'Desserts'].map((item) => (
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

      {/* Content Section */}
      <div style={styles.contentContainer}>
        {activeButton === 'Food' && (
          <>
            <LeftSideText />
            <LeftSideTextTwo />
          </>
        )}
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

// Responsive Styles with 4 buttons per row
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '10px',
  },
  buttonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Ensures 4 buttons per row
    gap: '10px',
    width: '100%',
    maxWidth: '600px',
    justifyContent: 'center',
    marginLeft: '-15px'
  },
  button: {
    padding: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '6px',
    background: 'none',
    color: '#333',
    textAlign: 'center',
    transition: 'background 0.3s ease, transform 0.2s ease',
    
  },
  activeButton: {
    background: '#444',
    color: '#fff',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  },
  text: {
    fontWeight: 'bold',
  },
  availableItemsContainer: {
    marginTop: '15px',
  },
  availableItemsButton: {
    padding: '12px 5px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: '#FF4500',
    borderRadius: '10px',
    border: 'none',
    textShadow: '1px 2px 4px rgba(0, 0, 0, 0.4)',
    transition: 'all 0.3s ease',
    marginLeft: '200px'
  },
  contentContainer: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
  },
};

export default FoodMenu;
