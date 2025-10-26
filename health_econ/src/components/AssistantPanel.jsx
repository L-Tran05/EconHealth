import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const AssistantPanel = ({ chatMessages, setChatMessages }) => {
  const [chatInput, setChatInput] = useState('');

  const handleQuickQuestion = (question) => {
    setChatMessages(prev => [...prev, { type: 'user', text: question }]);
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { type: 'assistant', text: `Here’s some guidance on ${question.toLowerCase()}...` }
      ]);
    }, 500);
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, { type: 'user', text: chatInput }]);
    setChatInput('');
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { type: 'assistant', text: 'Thanks for your question — here’s how I can help!' }
      ]);
    }, 500);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col h-fit lg:sticky lg:top-8">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="w-5 h-5 text-gray-700" />
        <h2 className="text-xl font-semibold text-gray-900">Assistant</h2>
      </div>

      {/* Quick Questions */}
      <div className="mb-4 space-y-2">
        {['What is FPL?', 'Negotiation script', 'Explain charity care'].map(q => (
          <button
            key={q}
            onClick={() => handleQuickQuestion(q)}
            className="w-full text-left text-sm px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 mb-4 min-h-[200px] max-h-[400px] overflow-y-auto space-y-3">
        {chatMessages.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-8">
            Ask a question or click a suggestion above
          </p>
        ) : (
          chatMessages.map((msg, i) => (
            <div
              key={i}
              className={`text-sm p-3 rounded-lg ${
                msg.type === 'user' ? 'bg-blue-50 ml-4' : 'bg-gray-50 mr-4'
              }`}
            >
              {msg.text}
            </div>
          ))
        )}
      </div>

      {/* Input */}
      <div className="relative">
        <input
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your question..."
          className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AssistantPanel;
