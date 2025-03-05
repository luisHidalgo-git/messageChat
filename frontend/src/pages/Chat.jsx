// src/pages/Chat.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';

const Chat = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedUser , setSelectedUser ] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/users/', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Si usas JWT
                        // O si usas autenticación de sesión, puedes necesitar el token CSRF
                        // 'X-CSRFToken': csrfToken,
                    },
                });
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchContacts();
    }, []);

    const handleSelectUser  = async (user) => {
        setSelectedUser (user);
        // Aquí puedes agregar la lógica para obtener mensajes del usuario seleccionado
    };

    const handleSendMessage = async () => {
        if (newMessage && selectedUser ) {
            // Lógica para enviar el mensaje
            setMessages([...messages, { content: newMessage }]);
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