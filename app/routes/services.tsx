import { Link } from "@remix-run/react";
import { Palette, Code, Search, Smartphone, ArrowRight, Check } from "lucide-react";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description: "Beautiful, user-centric designs that captivate and convert your audience.",
      features: ["UI/UX Design", "Responsive Design", "Brand Integration", "Prototyping"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    },
    {
      icon: Code,
      title: "Development",
      description: "Robust, scalable web applications built with cutting-edge technologies.",
      features: ["Frontend Development", "Backend Development", "API Integration", "Performance Optimization"],
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description: "Drive traffic and grow your business with strategic digital marketing.",
      features: ["Search Engine Optimization", "Content Strategy", "Social Media Marketing", "Analytics & Reporting"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage users.",
      features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Store Optimization"],
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into understanding your business, goals, and target audience.",
    },
    {
      step: "02",
      title: "Strategy",
      description: "We develop a comprehensive strategy tailored to your specific needs and objectives.",
    },
    {
      step: "03",
      title: "Design",
      description: "Our creative team brings your vision to life with stunning, user-focused designs.",
    },
    {
      step: "04",
      title: "Development",
      description: "We build your solution using the latest technologies and best practices.",
    },
    {
      step: "05",
      title: "Launch",
      description: "We deploy your project and provide ongoing support to ensure continued success.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="services-gradient min-h-screen relative overflow-hidden">
        <Navigation />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 left-40 w-72 h-72 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-white rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 container-custom pt-32 pb-16">
          <div className="text-center animate-fade-in">
            <h1 className="heading-primary text-white mb-8">
              Our
              <span className="block gradient-text">Services</span>
            </h1>
            <p className="body-large text-white/80 mb-12 max-w-3xl mx-auto">
              From concept to launch, we provide comprehensive digital solutions that drive results.
            </p>
          </div>

          {/* Services Preview Image */}
          <div className="mt-20 animate-slide-up">
            <div className="image-overlay">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2"
                alt="Our services in action"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="service-card card-hover">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="heading-tertiary text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures exceptional results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="relative mb-6">
                  <div className="process-number">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="body-large text-gray-600 mb-10">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}