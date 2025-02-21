import React from 'react';
import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-8 z-20">
      {isOpen && (
        <div className="bg-dark-charcoal rounded-lg shadow-lg p-4 w-80">
          <p className="text-white">This is a placeholder chatbot.  Future AI integration will go here.</p>
          <button onClick={toggleChatbot} className="bg-electric-blue text-white rounded py-2 px-4 mt-4">Close</button>
        </div>
      )}
      <button
        onClick={toggleChatbot}
        className="bg-electric-blue text-white rounded-full w-16 h-16 flex items-center justify-center hover:shadow-md transition-shadow"
      >
        Chat
      </button>
    </div>
  );
};

export default Chatbot;
