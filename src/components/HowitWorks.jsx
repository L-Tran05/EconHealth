import { Upload, Sparkles, FileText } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Upload,
      title: "Upload Your Bill",
      description: "Simply paste your bill text or upload an image. We support all common formats including photos and PDFs.",
      color: "bg-blue-500"
    },
    {
      number: "2",
      icon: Sparkles,
      title: "AI Analysis",
      description: "Our advanced AI analyzes every line item, medical code, and charge to provide comprehensive insights in seconds.",
      color: "bg-blue-500"
    },
    {
      number: "3",
      icon: FileText,
      title: "Get Your Report",
      description: "Review your detailed breakdown, discover savings opportunities, and download a comprehensive report to keep.",
      color: "bg-blue-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to understanding your medical bills
          </p>
        </div>

        {/* Desktop - horizontal layout */}
        <div className="hidden md:flex items-center justify-between mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`${step.color} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold`}>
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="w-32 lg:w-64 h-1 bg-gray-300 mx-4"></div>
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition">
                {/* Mobile number circle */}
                <div className={`md:hidden ${step.color} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                  {step.number}
                </div>
                
                <div className="bg-blue-50 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}