import { Link } from "@remix-run/react";
import { 
  ArrowRight, Star, Users, Award, Zap, Monitor, Brush, 
  Code, BarChart, MessageCircle, ChevronRight, ArrowUpRight 
} from "lucide-react";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import { useEffect, useState } from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Creative Agency | Transform Your Digital Presence" },
    { name: "description", content: "We transform ideas into exceptional digital experiences that captivate, engage, and convert your audience." },
  ];
};

export default function Index() {
  // Intersection Observer for animation on scroll
  const [isVisible, setIsVisible] = useState({
    stats: false,
    services: false,
    testimonials: false,
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observers: IntersectionObserver[] = [];

    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(prev => ({ ...prev, stats: true }));
        statsObserver.disconnect();
      }
    }, observerOptions);

    const servicesObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(prev => ({ ...prev, services: true }));
        servicesObserver.disconnect();
      }
    }, observerOptions);

    const testimonialsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(prev => ({ ...prev, testimonials: true }));
        testimonialsObserver.disconnect();
      }
    }, observerOptions);

    const statsSection = document.getElementById("stats-section");
    const servicesSection = document.getElementById("services-section");
    const testimonialsSection = document.getElementById("testimonials-section");

    if (statsSection) statsObserver.observe(statsSection);
    if (servicesSection) servicesObserver.observe(servicesSection);
    if (testimonialsSection) testimonialsObserver.observe(testimonialsSection);

    observers.push(statsObserver, servicesObserver, testimonialsObserver);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "150+", label: "Projects Completed" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Zap, value: "5+", label: "Years Experience" },
  ];

  const services = [
    {
      icon: Monitor,
      title: "Web Design",
      description: "Beautiful, responsive websites that engage your audience and drive conversions.",
    },
    {
      icon: Code,
      title: "Development",
      description: "Custom web applications with clean code and powerful functionality.",
    },
    {
      icon: Brush,
      title: "Branding",
      description: "Strategic brand identity that communicates your unique value proposition.",
    },
    {
      icon: BarChart,
      title: "Marketing",
      description: "Data-driven marketing strategies that deliver measurable results.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "Creative Agency transformed our vision into reality. Their attention to detail and creativity exceeded our expectations.",
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateCorp",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "Working with this team was an absolute pleasure. They delivered exceptional results on time and within budget.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "The level of professionalism and creativity is unmatched. Our brand has never looked better!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-gradient min-h-screen relative overflow-hidden pattern-dots">
        <Navigation />
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-float"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom pt-32 pb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-left animate-fade-in lg:pr-10">
              <h1 className="heading-primary text-white mb-6">
                We Create
                <span className="block gradient-text animate-pulse-slow">Digital Magic</span>
              </h1>
              <p className="body-large text-white/80 mb-8 max-w-xl">
                Transform your ideas into stunning digital experiences that captivate, engage, and convert your audience. We blend creativity with technology to deliver results.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/services" className="btn-primary inline-flex items-center space-x-2">
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2 mt-12 lg:mt-0 animate-slide-up">
              <div className="relative image-overlay">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2"
                  alt="Creative workspace"
                  className="w-full rounded-3xl shadow-2xl"
                />
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary-500/30 rounded-full backdrop-blur-lg animate-float"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-500/30 rounded-full backdrop-blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-0 -translate-x-1/2 transform w-16 h-16 bg-white/20 rounded-full backdrop-blur-lg animate-float" style={{ animationDelay: '3s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section id="stats-section" className="relative">
        <div className="container-custom">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-12 z-20 relative ${
            isVisible.stats ? 'animate-fade-in' : 'opacity-0'
          }`}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stats-card" 
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="stats-icon">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">
              Our <span className="text-primary-600">Services</span>
            </h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your business thrive
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${
            isVisible.services ? 'animate-fade-in' : 'opacity-0'
          }`}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className="feature-card card-hover"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="feature-icon-wrapper">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services" className="btn-outline inline-flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-600 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your digital presence?</h2>
              <p className="text-white/90">Let's create something amazing together.</p>
            </div>
            <Link to="/contact" className="btn-secondary whitespace-nowrap self-start">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials-section" className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">
              What Our <span className="text-primary-600">Clients Say</span>
            </h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${
            isVisible.testimonials ? 'animate-fade-in' : 'opacity-0'
          }`}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card card-hover"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary-100 shadow-md"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Share your experience with us</span>
              <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}