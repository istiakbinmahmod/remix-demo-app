import { Link, useLocation } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 glass-card mx-4 mt-4 max-w-7xl left-1/2 transform -translate-x-1/2 animate-fade-in transition-all duration-300 ${
        scrolled ? 'bg-black/20 backdrop-blur-xl shadow-2xl' : 'bg-white/5 backdrop-blur-md'
      }`}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-600 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-white font-bold text-xl group-hover:text-primary-300 transition-colors duration-300">Creative</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${
                  location.pathname === item.href ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-white hover:text-primary-300 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 py-4 space-y-6 animate-fade-in border-t border-white/10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block nav-link text-center ${
                  location.pathname === item.href ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block btn-primary text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}