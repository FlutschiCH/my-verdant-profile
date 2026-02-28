import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Import pages
import { Home } from "@/pages/Home";
import { Coding } from "@/pages/Coding";
import { Trading } from "@/pages/Trading";
import { Travel } from "@/pages/Travel";
import { Contact } from "@/pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050805]">
        <Navbar />
        <main className="pt-24 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
