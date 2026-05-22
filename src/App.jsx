import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Marketplace from "./pages/Marketplace";
import Impact from "./pages/Impact";
import Training from "./pages/Training";
import Team from "./pages/Team";
import News from "./pages/News";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <section className="not-found page-offset">
      <span className="eyebrow">404</span>
      <h1>Page not found</h1>
      <p>The page you are looking for is unavailable or has moved.</p>
      <a href="/" className="btn btn-primary">Return Home</a>
    </section>
  );
}

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/training" element={<Training />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
