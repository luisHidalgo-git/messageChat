// src/pages/Chat.js

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import { getUsers, getMessages, sendMessage } from '../api/api';

const Chat = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedUser , setSelectedUser ] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const users = await getUsers(); // Obtener todos los usuarios
                setContacts(users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchContacts();
    }, []);

    const handleSelectUser  = async (user) => {
        setSelectedUser (user);
        const userMessages = await getMessages(user.username); // Obtener mensajes del usuario seleccionado
        setMessages(userMessages);
    };

    const handleSendMessage = async () => {
        if (newMessage && selectedUser ) {
            await sendMessage(selectedUser .username, newMessage); // Enviar mensaje
            setMessages([...messages, { content: newMessage }]); // Actualizar mensajes en el estado
            setNewMessage('');
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '30%', borderRight: '1px solid #ccc', overflowY: 'scroll' }}>
                {contacts.map((contact) => (
                    <Contact 
                        key={contact.id} 
                        username={contact.username} 
                        onSelect={() => handleSelectUser (contact)} 
                    />
                ))}
            </div>
            <div style={{ width: '70%', padding: '10px' }}>
                <Header />
                <h2>{selectedUser  ? selectedUser .username : 'Select a contact'}</h2>
                <div style={{ height: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
                    {messages.map((msg, index) => (
                        <Message key={index} content={msg.content} />
                    ))}
                </div>
                {selectedUser  && (
                    <MessageInput 
                        onSend={handleSendMessage} 
                        value={newMessage} 
                        onChange={(e) => setNewMessage(e.target.value)} 
                    />
                )}
            </div>
        </div>
    );
};

export default Chat;