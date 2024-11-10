import React, {useState} from 'react';

const FoodItems = () => {
  const [quantities, setQuantities] = useState({
    'Chicken Laphing': 0,
    'Chicken Choila': 0,
    'Sausages': 0,
  });
  const foodItems = [
    { name: 'Chicken Laphing', imageUrl: '/pictures/laphing.jpg', price: '$5.00',},
    { name: 'Chicken Choila', imageUrl: '/pictures/chickenchoila.png', price: '$5.00' },
    { name: 'Sausages', imageUrl: '/pictures/Sausages.jpg',price: '$5.00' },
  ];

  const handleAdd = (name: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: prevQuantities[name] + 1,
    }));
  };

  const handleSubtract = (name: string) => {
    setQuantities((prevQuantitites) => ({
      ...prevQuantitites,
      [name]: prevQuantitites[name] > 0 ? prevQuantitites[name] -1: 0,
    }));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
      {foodItems.map((item, index) => (
        <button key={index} style={buttonStyle}>
          <div style={imageContainerStyle as React.CSSProperties}>
            <img src={item.imageUrl} alt={item.name} style={imageStyle as React.CSSProperties} />
            <span style={nameTextStyle as React.CSSProperties}>{item.name}</span>
            </div>
            <div style={priceContainerStyle as React.CSSProperties}>
            <span style={priceTextStyle as React.CSSProperties}>{item.price}</span>
          </div>
          <div style={quantityContainerStyle as React.CSSProperties}>
            <button
                onClick={() => handleSubtract(item.name)}
                style={quantityButtonStyle as React.CSSProperties}>
                  -
                </button>
                <span style={quantityTextStyle as React.CSSProperties}>
                  {quantities[item.name]}
                </span>
                <button
                onClick={() => handleAdd(item.name)}
                style={quantityButtonStyle as React.CSSProperties}>
                  +
                </button>
          </div>
        </button>
      ))}
    </div>
  );
};

const buttonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
};

const imageContainerStyle = {
  border: '2px solid #ccc', // Stroke around the image
  borderRadius: '8px',
  padding: '10px 5px',
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  justifyContent: 'flex-start', // Ensures consistent spacing
  width: '110px', // Width matches image for alignment
  height: '250px',
  boxSizing: 'border-box',
};

const imageStyle: React.CSSProperties = {
  width: '100px', // Medium-sized image
  height: '130px',
  objectFit: 'cover',
  borderRadius: '4px',
};

const nameTextStyle = {
  marginTop: '4px',
  fontSize: '16px',
  color: '#333',
  maxWidth: '100px', // Constrains text width to wrap instead of resizing box
  textAlign: 'center', //centers text
  whiteSpace: 'normal', //Allows text to wrap
};

const priceContainerStyle = {
  marginTop: '-55px', //space between image container and price
  display: 'flex',
  justifyContent: 'center',
  width: '100%', //Aligns price with the button width
};

const priceTextStyle: React.CSSProperties = {
  
  fontSize: '14px',
  color: '#666', //Lighter color to differentiate
};

const quantityContainerStyle ={
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',
};

const quantityButtonStyle ={
  backgroundColor: '#f1f1f1',
  border: '1px solid #ccc',
  borderRadius: '50%',
  width: '30px',
  fontSize: '18px',
  margin: '0 8px',
  cursor: 'pointer',
};

const quantityTextStyle = {
  fontSize: '16px',
  color: '#333',
};

export default FoodItems;
