import React, { useState } from 'react';
import BillDetailsPanel from '../components/BillDetailsPanel';
import TabsPanel from '../components/TabsPanel'
import AssistantPanel from '../components/AssistantPanel';

const DemoPage = ({ onBack }) => {
  const [billText, setBillText] = useState('');
  const [activeTab, setActiveTab] = useState('analyze');
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-700">EconHealth</h1>
          <button onClick={onBack} className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            ← Back to Home
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <BillDetailsPanel billText={billText} setBillText={setBillText} setActiveTab={setActiveTab} />
        <TabsPanel activeTab={activeTab} setActiveTab={setActiveTab} billText={billText} setBillText={setBillText} />
        <AssistantPanel chatMessages={chatMessages} setChatMessages={setChatMessages} />
      </div>
    </div>
  );
};

export default DemoPage;