// src/components/MessageInput.js

import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
    const [message, setMessage] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        onSend(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSend} style={{ display: 'flex', padding: '10px' }}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                style={{ flex: 1, padding: '10px' }}
            />
            <button type="submit" style={{ padding: '10px' }}>Send</button>
        </form>
    );
};

export default MessageInput;