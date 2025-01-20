import { Sparkles, MessageCircle, ArrowRight, Brain, Heart, Shield, Menu } from "lucide-react";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-white">
      {/* Hero Section */}
      <div className="relative">
        <nav className="absolute top-0 w-full p-6 bg-gradient-to-b from-purple-100 to-transparent">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-purple-600" />
              <span className="text-2xl font-bold text-purple-900">Aurora</span>
            </div>

            {/* Navbar Menu */}
            <div className="hidden md:flex space-x-6">
              <button className="text-purple-900 hover:text-purple-700">About</button>
              <button className="text-purple-900 hover:text-purple-700">Services</button>
              <button className="text-purple-900 hover:text-purple-700">Contact</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-purple-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 bg-purple-100 rounded-lg shadow-lg p-4 space-y-4">
              <button className="block w-full text-purple-900 hover:text-purple-700 text-left">
                About
              </button>
              <button className="block w-full text-purple-900 hover:text-purple-700 text-left">
                Services
              </button>
              <button className="block w-full text-purple-900 hover:text-purple-700 text-left">
                Contact
              </button>
              <button className="block w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-center">
                Get Started
              </button>
            </div>
          )}
        </nav>

        <div className="container mx-auto pt-32 pb-20 px-6 flex flex-col justify-center items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-purple-900 mb-6">
              Welcome to Aurora
            </h1>
            <p className="text-xl text-purple-700 mb-8">
              Empowering early autism detection through innovative technology
              and compassionate care
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition flex items-center">
                Start Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Advanced Detection
              </h3>
              <p className="text-purple-700">
                Using cutting-edge AI technology for accurate and early autism
                detection
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Compassionate Care
              </h3>
              <p className="text-purple-700">
                Providing support and guidance throughout your journey
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Privacy First
              </h3>
              <p className="text-purple-700">
                Ensuring your data is secure and protected at all times
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-500 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition flex items-center space-x-2">
          <MessageCircle className="h-5 w-5" />
          <span>Need help? Chat with us</span>
        </button>
      </div>
    </div>
  );
}

export default App;
