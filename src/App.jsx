import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          EconHealth is Coming Together! 🎉
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Navbar is working with Tailwind!
        </p>
      </div>
    </div>
  )
}

export default App