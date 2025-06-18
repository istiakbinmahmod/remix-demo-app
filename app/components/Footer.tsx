import { Heart, Twitter, Instagram, Linkedin, Github, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary-600 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-white font-bold text-xl">Creative</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transforming ideas into exceptional digital experiences. We are passionate about creating innovative solutions that help businesses thrive in the digital world.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors">
                <Twitter size={18} className="text-slate-300" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors">
                <Instagram size={18} className="text-slate-300" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors">
                <Linkedin size={18} className="text-slate-300" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors">
                <Github size={18} className="text-slate-300" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Web Design</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Development</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Branding</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Marketing</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Consulting</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Careers</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Case Studies</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-slate-400">123 Innovation Street, Tech City, CA 94043, United States</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-400 flex-shrink-0" />
                <span className="text-sm text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-400 flex-shrink-0" />
                <span className="text-sm text-slate-400">info@creativeagency.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Creative Agency. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4 md:mt-0">
              <span className="text-sm text-slate-500">Made with</span>
              <Heart className="w-4 h-4 text-secondary-500" />
              <span className="text-sm text-slate-500">by Creative Agency</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}