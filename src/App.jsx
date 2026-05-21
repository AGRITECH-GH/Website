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

function AuthPlaceholder({ title, copy }) {
  return (
    <section className="auth-shell page-offset">
      <div className="auth-card">
        <span className="eyebrow">Account Access</span>
        <h1>{title}</h1>
        <p>{copy}</p>
        <form className="auth-form">
          <label>
            Email Address
            <input type="email" placeholder="name@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>
          <button className="btn btn-primary" type="button">Continue</button>
        </form>
      </div>
    </section>
  );
}

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
          <Route path="/login" element={<AuthPlaceholder title="Welcome back" copy="Sign in to continue exploring the AgriConnect platform." />} />
          <Route path="/signup" element={<AuthPlaceholder title="Create your AgriConnect account" copy="Join the platform connecting agriculture, technology, markets, and climate-smart growth." />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
