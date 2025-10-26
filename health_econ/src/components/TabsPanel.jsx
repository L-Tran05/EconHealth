import React from 'react';
import { FileText, Lightbulb, GraduationCap } from 'lucide-react';

const TabsPanel = ({ activeTab, setActiveTab, billText, setBillText }) => (
  <div className="lg:col-span-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    {/* The three tabs*/}
    <div className="flex gap-6 mb-6 border-b border-gray-200">
      {[
        { id: 'analyze', icon: FileText, label: 'Analyze' },
        { id: 'recommendations', icon: Lightbulb, label: 'Recommendations' },
        { id: 'learn', icon: GraduationCap, label: 'Learn' },
      ].map(tab => (

        /*when clicked on words will be blue*/
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`pb-3 px-1 font-medium text-sm flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === tab.id
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <tab.icon className="w-4 h-4" /> {tab.label}
        </button>
      ))}
    </div>

    {/* ANALYZE*/}
    {activeTab === 'analyze' && (
      <textarea
        value={billText}
        onChange={(e) => setBillText(e.target.value)}
        placeholder="Medical Bill Analysis here"
        className="w-full h-96 p-4 border border-black-300 rounded-lg font-mono text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-6"
      />
    )}

    {/* RecCOmendation*/}
    {activeTab === 'recommendations' && (
      <div className="text-center py-12">
        <Lightbulb className="w-10 h-10 text-green-600 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Recommendations</h3>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          We will show personalized assistance programs here
        </p>
      </div>
    )}

    {/*LEarn*/}
    {activeTab === 'learn' && (
      <div className="text-center py-12">
        <GraduationCap className="w-10 h-10 text-blue-600 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn & Save</h3>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Have access to educational resources about healthcare finance
        </p>
      </div>
    )}
  </div>
);

export default TabsPanel;