import { Users, Target, Heart, Lightbulb } from "lucide-react";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We pour our hearts into every project, ensuring exceptional results that exceed expectations.",
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Every decision we make is guided by measurable outcomes and your business success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of trends and technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We believe the best results come from working closely with our clients as partners.",
    },
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      bio: "With 10+ years in design, Alex leads our creative vision and ensures every project tells a compelling story.",
    },
    {
      name: "Sofia Martinez",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      bio: "Sofia transforms designs into powerful digital experiences with clean, efficient code and attention to detail.",
    },
    {
      name: "David Kim",
      role: "Strategy Director",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      bio: "David ensures every project aligns with business goals and delivers measurable results for our clients.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="about-gradient min-h-screen relative overflow-hidden">
        <Navigation />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 container-custom pt-32 pb-16">
          <div className="text-center animate-fade-in">
            <h1 className="heading-primary text-white mb-8">
              About
              <span className="block gradient-text">Our Story</span>
            </h1>
            <p className="body-large text-white/80 mb-12 max-w-3xl mx-auto">
              We're a passionate team of creators, strategists, and innovators dedicated to bringing your vision to life.
            </p>
          </div>

          {/* Story Image */}
          <div className="mt-20 animate-slide-up">
            <div className="image-overlay">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2"
                alt="Our team collaborating"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="heading-secondary text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="body-medium text-gray-700 mb-6">
                We believe that great design has the power to transform businesses and touch lives. 
                Our mission is to create digital experiences that not only look beautiful but also 
                drive meaningful results for our clients.
              </p>
              <p className="body-medium text-gray-700">
                Since our founding in 2018, we've helped over 500 companies tell their stories 
                through compelling design and innovative digital solutions. Every project is an 
                opportunity to push boundaries and exceed expectations.
              </p>
            </div>
            <div className="animate-slide-up">
              <div className="image-overlay">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2"
                  alt="Creative process"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="heading-tertiary text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              The talented people behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="heading-tertiary text-gray-900 mb-2">{member.name}</h3>
                <p className="text-lg text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}