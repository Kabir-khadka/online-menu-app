import React from 'react';

const FoodMenu = () => {
  return (
    <div>
      <div style={styles.firstRowContainer}>
        <button style={{ ...styles.button, ...styles.menuButton }}>
          <span style={styles.text}>Food</span>
        </button>
        <button style={styles.button}>
          <span style={styles.text}>Momos</span>
        </button>
        <button style={styles.button}>
          <span style={styles.text}>Noodles</span>
        </button>
        <button style={styles.button}>
          <span style={styles.text}>Pizza</span>
        </button>
      </div>
      <div style={styles.secondRowContainer}>
        <button style={styles.button}>
          <span style={styles.text}>Drinks</span>
        </button>
        <button style={styles.button}>
          <span style={styles.text}>Snacks</span>
        </button>
        <button style={styles.button}>
          <span style={styles.text}>Combos</span>
        </button>
        <button style={styles.button}>
          <span style={styles.text}>Desserts</span>
        </button>
      </div>
    </div>
  );
};

const styles = {
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
  menuButton: {
    backgroundColor: '#444',
    color: '#fff',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  },
  text: {
    fontWeight: 'bold',
  },
};

export default FoodMenu;
