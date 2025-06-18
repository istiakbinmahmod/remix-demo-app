import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@creative-agency.com",
      description: "Drop us a line anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Creative Street, Design City, DC 12345",
      description: "Our office is always open for meetings",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="contact-gradient min-h-screen relative overflow-hidden">
        <Navigation />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 container-custom pt-32 pb-16">
          <div className="text-center animate-fade-in">
            <h1 className="heading-primary text-white mb-8">
              Let's
              <span className="block gradient-text">Connect</span>
            </h1>
            <p className="body-large text-white/80 mb-12 max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear from you and discuss how we can help.
            </p>
          </div>

          {/* Contact Image */}
          <div className="mt-20 animate-slide-up">
            <div className="image-overlay">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2"
                alt="Get in touch with us"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="heading-tertiary text-gray-900 mb-8">
                Send us a message
              </h2>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="form-input resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="heading-tertiary text-gray-900 mb-8">
                Get in touch
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-card">
                    <div className="contact-icon">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-700 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Image */}
              <div className="mt-12">
                <div className="image-overlay">
                  <img
                    src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                    alt="Our office"
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="body-large text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-8">
            <div className="faq-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How long does a typical project take?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Project timelines vary depending on scope and complexity. A standard website typically takes 4-8 weeks, 
                while more complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="faq-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What's included in your web design service?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our web design service includes strategy, UX/UI design, responsive development, content integration, 
                SEO optimization, testing, and launch support. We also provide training and ongoing maintenance options.
              </p>
            </div>

            <div className="faq-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Do you work with small businesses?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely! We work with businesses of all sizes, from startups to enterprises. 
                We offer flexible packages and solutions tailored to fit different budgets and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}