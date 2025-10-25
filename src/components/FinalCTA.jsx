export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-500 via-blue-400 to-green-400">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Understand Your Medical Bills?
        </h2>
        <p className="text-xl text-white mb-8 opacity-90">
          Join thousands who have already gained clarity on their healthcare costs. 
          Get started in seconds, completely free.
        </p>
        <button className="bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg inline-flex items-center gap-2">
          Analyze Your Bill Now
          <span>→</span>
        </button>
      </div>
    </section>
  );
}