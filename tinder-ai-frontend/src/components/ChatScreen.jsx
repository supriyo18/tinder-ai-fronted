import React, { useState } from 'react';

function ChatScreen() {
    const [messages, setMessages] = useState([
        "Hi",
        "hello",
        "Phone number"
    ]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div className='rounded-lg shadow-lg p-4'>
            <h2 className='text-2xl font-bold mb-4'>Chat with Chandrani</h2>
            <div className='h-[50vh] border rounded overflow-y-auto mb-4 p-2'>
                {messages.map((message, index) => (
                    <div key={index}>
                        <div className='mb-4 p-2 rounded bg-gray-200'>{message}</div>
                    </div>
                ))}
            </div>
            <div className='flex'>
                <input
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Type your message...'
                />
                <button
                    onClick={sendMessage}
                    className='bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600'
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default ChatScreen;


