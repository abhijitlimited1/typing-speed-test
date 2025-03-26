import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Hindi",
    "Japanese",
    "Russian",
    "Portuguese",
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold flex items-center">
            TypeMasterPro
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white/20 px-4 py-2 rounded-lg border border-white/30 focus:outline-none"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} className="bg-gray-800">
                  {lang}
                </option>
              ))}
            </select>

            <div className="flex space-x-4">
              <Link
                to="/about"
                className="hover:text-blue-300 transition-colors"
              >
                About
              </Link>
              <Link
                to="/privacy"
                className="hover:text-blue-300 transition-colors"
              >
                Privacy
              </Link>
              <Link to="/faq" className="hover:text-blue-300 transition-colors">
                FAQ
              </Link>
              <Link
                to="/contact"
                className="hover:text-blue-300 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-white/20 px-4 py-2 rounded-lg border border-white/30"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} className="bg-gray-800">
                  {lang}
                </option>
              ))}
            </select>

            <div className="flex flex-col space-y-2">
              <Link to="/about" className="px-4 py-2 hover:bg-white/10 rounded">
                About
              </Link>
              <Link
                to="/privacy"
                className="px-4 py-2 hover:bg-white/10 rounded"
              >
                Privacy
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 hover:bg-white/10 rounded"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
