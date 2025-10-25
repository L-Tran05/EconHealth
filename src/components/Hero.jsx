export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Understanding Your Medical Bills Should Never Feel Like a{" "}
              <span className="text-blue-600">Second Diagnosis</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Get instant AI-powered analysis of your medical bills with clear explanations, 
              cost breakdowns, and personalized guidance.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-coral-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-coral-600 transition shadow-lg">
                Analyze Your Bill Now
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
                See How It Works ↓
              </button>
            </div>
          </div>
          
          {/* Right side - Dashboard mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition duration-300">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-500">Dashboard Preview</p>
                <div className="mt-4 text-4xl font-bold text-blue-600">$7,890</div>
                <p className="text-gray-600 mt-2">Sample Bill Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}