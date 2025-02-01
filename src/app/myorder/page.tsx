"use client"

import React, { useState } from "react";
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { useOrder } from '../context/OrderContext';

const MyOrderPage: React.FC = () => {
    const router = useRouter(); // Initialize the useRouter hook
    const { orderItems, increaseItemQuantity, decreaseItemQuantity } = useOrder(); // Access the context with quantity handlers
    const [isHovered, setIsHovered] = useState(false);


    //Calculate total bill
    const totalBill = orderItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
    );

    const handleConfirmOrder = () => {
        //Navigate to payment page instead of showinf alert
        router.push('/payment');
    };

    return (
        <div style={pageStyle}>
            {/* Back Button */}
            <button 
                style={backButtonStyle} 
                onClick={() => router.push('/')} // Redirect to the homepage
            >
                ← Back
            </button>

            {/* Page Content */}
            <h1 style={headingStyle}>My Orders</h1>

            { orderItems.map((item, index) => (
                <div
                    key={index}
                    style= {orderItemStyle}>
                <span>
                {item.name} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
                </span>
                <div style={quantityControlStyle}>
                    {/* Decrease Button*/}
                    <button
                    onClick={() => decreaseItemQuantity(item.name)}
                    style={quantityButtonStyle}
                    >
                        -
                    </button> 

                    <span style={quantityTextStyle}>{item.quantity}</span>

                    {/* Increase Button */}
                    <button
                    onClick={() => increaseItemQuantity(item.name)}
                    style={quantityButtonStyle}
                    >
                      +    
                    </button>  
                </div>
            </div>
            ))}

            {/* Total Bill Section */}
            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                backgroundColor: "white",
                borderRadius: "5px",
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                  >
                    Total Bill
                  </span>
                  <span
                  style={{
                    fontSize: "18px",
                    color: "#F5B849",
                  }}
                  >
                    ${totalBill.toFixed(2)}
                  </span>
              </div>
              {/* Confirm Order Button */}
              <button
                 style={{
                    ...confirmOrderButtonStyle,
                    ...(isHovered ? hoverStyle : {}),
                 }}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}
                 onClick={handleConfirmOrder}
                 disabled={orderItems.length === 0}
                 >
                    Confirm Order
                 </button>
        </div>
    );
};

// Styles
const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fdd7a2', // Same as homepage background
    padding: '20px',
};

const backButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '10px 15px',
    fontSize: '14px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#F5B849',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
};

const headingStyle: React.CSSProperties = {
    marginTop: '60px',
    fontSize: '24px',
    color: '#333',
    textAlign: 'center',
};

const orderItemStyle: React.CSSProperties ={
    display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "15px",
  margin: "10px 0",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  width: "90%",
  maxWidth: "500px",
};

const quantityControlStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
};

const quantityButtonStyle: React.CSSProperties = {
    padding: "5px 10px",
    backgroundColor: "#F5B849",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  
  const quantityTextStyle: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: "bold",
  };

  const confirmOrderButtonStyle: React.CSSProperties = {
    marginTop: "20px",
    padding: "12px 24px",
    fontSize: "16px",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#2ecc71',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};

const hoverStyle: React.CSSProperties = {
    backgroundColor: '#27ae60',
    transform: 'translateY(-2px)',
    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)',
};

export default MyOrderPage;
