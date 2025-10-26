import React from 'react';
import { FileText } from 'lucide-react';

const BillDetailsPanel = ({ billText, setBillText, setActiveTab }) => (
  <div className="lg:col-span-3 bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit">
    <div className="flex items-center gap-2 mb-4">
      <FileText className="w-5 h-5 text-gray-900" />
      <h2 className="text-lg font-semibold text-gray-900">Bill Details</h2>
    </div>

    <textarea
      value={billText}
      onChange={(e) => setBillText(e.target.value)}
      placeholder="Paste your medical bill text here..."
      className="w-full h-64 p-3 border border-gray-300 rounded-lg font-mono text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4"
    />

    <button
      onClick={() => billText.trim() && setActiveTab('recommendations')}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-colors"
    >
      Extract bill facts
    </button>
  </div>
);

export default BillDetailsPanel;