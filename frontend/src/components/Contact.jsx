// src/components/Contact.js

import React from 'react';

const Contact = ({ username, onSelect }) => {
    return (
        <div 
            onClick={onSelect} 
            style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '50%',
                backgroundColor: '#f0f0f0',
                margin: '5px',
                width: '60px',
                height: '60px',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            <div style={{
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                backgroundColor: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
            }}>
                {username.charAt(0).toUpperCase()}
            </div>
            <div style={{ marginTop: '5px' }}>{username}</div>
        </div>
    );
};

export default Contact;