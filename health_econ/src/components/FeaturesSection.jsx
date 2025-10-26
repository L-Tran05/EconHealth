import React from 'react';
import { DollarSign, Heart, Shield } from 'lucide-react';

const FeaturesSection = () => (
  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-green-50">
        <DollarSign className="w-6 h-6 text-green-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Savings</h3>
      <p className="text-gray-600 text-sm">Discover programs that could reduce your bill by 50–100%</p>
    </div>

    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-cyan-50">
        <Heart className="w-6 h-6 text-cyan-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Simple Process</h3>
      <p className="text-gray-600 text-sm">Step-by-step guidance through complex applications</p>
    </div>

    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-lime-50">
        <Shield className="w-6 h-6 text-lime-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Advice</h3>
      <p className="text-gray-600 text-sm">Learn negotiation tactics that work with billing departments</p>
    </div>
  </div>
);

export default FeaturesSection;
