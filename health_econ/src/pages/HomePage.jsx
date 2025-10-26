import React from 'react';
import { Shield, DollarSign, Heart, GraduationCap, FileText, Lightbulb, Upload, Search, CheckCircle } from 'lucide-react';
import FeaturesSection from './components/FeaturesSection';

// colors: #BAA500 #599600 #178D3D #008761 #00778D

const HomePage = ({ onStartDemo }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">


      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">

        <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">

          {/*Intro part with the shield */}
          <Shield className="w-4 h-4" style={{ color: '#178D3D' }} />

          <span>Free • Confidential • No signup required</span>
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
            Understand
          </span>{' '}
          <span className="text-gray-900">and</span><br/>
          <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
            reduce
          </span>{' '}
          <span className="text-gray-900">your financial medical crisis</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
          Get personalized help finding financial assistance, negotiating costs, and understanding your healthcare bills—all in an easy and accessible matter.
        </p>

        <div className="flex gap-4 mb-16">
          <button
            onClick={onStartDemo}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
          >
            Chat with Us! →
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-900 font-medium px-6 py-3 rounded-lg border border-gray-300 transition-colors">
            How We Help
          </button>
        </div>

        <FeaturesSection />
      </div>

      {/* How it Works Section */}
      <div id="how-it-works" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">How it works</h2>
          <p className="text-gray-600 mb-12">Three simple steps to start saving on your medical bills</p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Numba 1 Miku */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-6">1</div>
              <Upload className="w-8 h-8 mx-auto text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Share your bill</h3>
              <p className="text-gray-600">Paste your medical bill or use our sample to get started instantly</p>
            </div>

            {/* Numba 2 Teto */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-6">2</div>
              <Search className="w-8 h-8 mx-auto text-green-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get matched</h3>
              <p className="text-gray-600">We analyze your bill and match you with relevant assistance programs</p>
            </div>

            {/* Numba 3 Neru */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-6">3</div>
              <CheckCircle className="w-8 h-8 mx-auto text-green-700 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Take action</h3>
              <p className="text-gray-600">Follow our step-by-step guidance to apply for programs and reduce costs</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-12 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to reduce your medical bills?</h2>
            <p className="text-gray-600 mb-6">Try our demo with a sample bill or paste your own to get started</p>
            <button
              onClick={onStartDemo}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;