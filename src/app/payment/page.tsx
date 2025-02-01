'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const PaymentPage: React.FC = () => {
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);
    const [isClient, setIsClient] = useState(false);  // Fix for hydration issue


    useEffect(() => {
        setIsClient(true);  // Ensure this runs only in the browser
    }, []);
    
    return (
        <div style={pageStyle}>
            <button
               style={backButtonStyle}
               onClick={() => router.push('/myorder')}
            >
                ← Back
            </button>

            <h1 style={headingStyle}>Payment</h1>

            <button 
                style={{
                    ...bankPayButtonStyle,
                    ...(isHovered ? hoverStyle : {}),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                    // Add payment handling logic here
                    alert('Redirecting to bank app...');
                }}
            >
                Pay with your trusted bank App
            </button>
        </div>
    );
};

const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#fdd7a2",
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
    cursor: 'pointer',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
};

const headingStyle: React.CSSProperties = {
    marginTop: '60px',
    fontSize: '24px',
    color: '#333',
    textAlign: 'center',
};

// New styles for bank payment button
const bankPayButtonStyle: React.CSSProperties = {
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

export default PaymentPage;