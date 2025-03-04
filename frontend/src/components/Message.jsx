// src/components/Message.js

import React from 'react';

const Message = ({ content }) => {
    return (
        <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            <p>{content}</p>
        </div>
    );
};

export default Message;