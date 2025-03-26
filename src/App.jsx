import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TimerSelector from "./components/TimerSelector";
import TestArea from "./components/TestArea";
import Result from "./components/Result";
import Footer from "./components/Footeer";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";

const App = () => {
  const [selectedTime, setSelectedTime] = useState(60);
  const [language, setLanguage] = useState("English");
  const [results, setResults] = useState(null);
  const [testKey, setTestKey] = useState(0);

  const handleComplete = (result) => {
    setResults(result);
  };

  const handleTryAgain = () => {
    setResults(null);
    setTestKey((prev) => prev + 1);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar language={language} setLanguage={setLanguage} />

        <main className="container mx-auto px-4">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  {!results ? (
                    <>
                      <TimerSelector
                        selectedTime={selectedTime}
                        setSelectedTime={setSelectedTime}
                      />
                      <TestArea
                        key={testKey}
                        selectedTime={selectedTime}
                        language={language}
                        onComplete={handleComplete}
                      />
                    </>
                  ) : (
                    <Result result={results} onTryAgain={handleTryAgain} />
                  )}
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
