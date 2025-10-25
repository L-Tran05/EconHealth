import { MessageSquare, DollarSign, BarChart3, Lock, Download, Target } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Line-by-Line Explanation",
      description: "Get clear, jargon-free explanations for every charge on your medical bill. No more confusion about complex medical codes.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: DollarSign,
      title: "Find Assistance Programs",
      description: "Discover financial assistance programs you may qualify for based on your bill and location. Save money you didn't know was available.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BarChart3,
      title: "Visual Breakdowns",
      description: "See your costs visualized with charts and graphs. Understand where your money is going at a glance.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Lock,
      title: "Private & Secure",
      description: "Your data never leaves your device. We use local processing to keep your medical information completely private.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Download,
      title: "Download Reports",
      description: "Export detailed analysis reports as PDF. Perfect for sharing with family or keeping for your records.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Target,
      title: "Next Steps & Guidance",
      description: "Get actionable recommendations on how to handle your bill, including negotiation tips and payment plan options.",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Understand Your Bills
          </h2>
          <p className="text-xl text-gray-600">
            Powerful AI-driven features designed to make medical billing transparent and manageable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}