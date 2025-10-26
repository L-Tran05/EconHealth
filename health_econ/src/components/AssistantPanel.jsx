import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const AssistantPanel = ({ chatMessages, setChatMessages }) => {
  const [chatInput, setChatInput] = useState('');

  // 💡 Define quick question/answer pairs
  const quickAnswers = {
    'What is FPL?': `The Federal Poverty Level (FPL) is a measure of household income issued annually by the U.S. Department of Health and Human Services. It helps determine eligibility for programs like Medicaid or subsidized health insurance. The FPL varies by household size, and some programs use a specific percentage (like 130% or 185%) to set income limits.`,
    
    'Elibigility for Medical Financial Assistance': `Eligibility for medical financial assistance depends on factors such as income level (often based on a percentage of the FPL), household size, age, residency, and disability status. Each hospital or health program may have its own detailed requirements.`,
    
    'Explain charity care': `Charity care is free or discounted medical care provided by hospitals to patients who can’t afford to pay. It’s typically based on income and financial need, following guidelines tied to the Federal Poverty Level (FPL). Applying usually requires documentation of income and residency.`
  };

  // 🧠 Handle when user clicks a quick question
  const handleQuickQuestion = (question) => {
    setChatMessages(prev => [...prev, { type: 'user', text: question }]);
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { type: 'assistant', text: quickAnswers[question] || "I'm sorry, I don't have an answer for that yet." }
      ]);
    }, 500);
  };

  // 💬 Handle manual chat input
  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, { type: 'user', text: chatInput }]);
    setChatInput('');
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { type: 'assistant', text: "Thanks for your question! I’ll share details based on common eligibility rules for assistance programs." }
      ]);
    }, 500);
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col h-[600px] w-[400px] lg:sticky lg:top-8">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <MessageSquare className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">Assistant</h2>
      </div>

      {/* Quick Questions */}
      <div className="mb-5 space-y-2">
        {Object.keys(quickAnswers).map((q) => (
          <button
            key={q}
            onClick={() => handleQuickQuestion(q)}
            className="w-full text-left text-sm px-3 py-2 bg-[#599600] hover:bg-[#BAA500] rounded-lg text-white"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 mb-5 overflow-y-auto space-y-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
        {chatMessages.length === 0 ? (
          <p className="text-m text-gray-500 text-center py-12">
            Ask a question or click a suggestion above
          </p>
        ) : (
          chatMessages.map((msg, i) => (
            <div
              key={i}
              className={`text-sm p-3 rounded-lg leading-relaxed ${
                msg.type === 'user'
                  ? 'bg-blue-100 ml-8'
                  : 'bg-white mr-8 border border-gray-200'
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
