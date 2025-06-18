var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = renderToString(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation
} from "@remix-run/react";
import { useEffect } from "react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-3NXQPJQF.css";

// app/root.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var meta = () => [
  { title: "Creative Agency | Digital Solutions" },
  { name: "description", content: "We transform ideas into exceptional digital experiences" }
], links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
  },
  {
    rel: "icon",
    href: "/favicon.ico"
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png"
  }
];
function App() {
  let location = useLocation();
  return useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]), /* @__PURE__ */ jsxs("html", { lang: "en", className: "h-full scroll-smooth", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx2("meta", { name: "theme-color", content: "#0ea5e9" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "h-full font-sans antialiased bg-slate-50", children: [
      /* @__PURE__ */ jsx2(Outlet, {}),
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {})
    ] })
  ] });
}

// app/routes/services.tsx
var services_exports = {};
__export(services_exports, {
  default: () => Services
});
import { Link as Link3 } from "@remix-run/react";
import { Palette, Code, Search, Smartphone, ArrowRight, Check } from "lucide-react";

// app/components/Navigation.tsx
import { Link, useLocation as useLocation2 } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect as useEffect2 } from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Navigation() {
  let location = useLocation2(), [isOpen, setIsOpen] = useState(!1), [scrolled, setScrolled] = useState(!1);
  useEffect2(() => {
    let handleScroll = () => {
      window.scrollY > 20 ? setScrolled(!0) : setScrolled(!1);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" }
  ];
  return /* @__PURE__ */ jsx3(
    "nav",
    {
      className: `fixed top-0 w-full z-50 glass-card mx-4 mt-4 max-w-7xl left-1/2 transform -translate-x-1/2 animate-fade-in transition-all duration-300 ${scrolled ? "bg-black/20 backdrop-blur-xl shadow-2xl" : "bg-white/5 backdrop-blur-md"}`,
      children: /* @__PURE__ */ jsxs2("div", { className: "px-6 py-4", children: [
        /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs2(Link, { to: "/", className: "flex items-center space-x-3 group", children: [
            /* @__PURE__ */ jsx3("div", { className: "w-10 h-10 bg-gradient-to-br from-secondary-600 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg", children: /* @__PURE__ */ jsx3("span", { className: "text-white font-bold text-lg", children: "C" }) }),
            /* @__PURE__ */ jsx3("span", { className: "text-white font-bold text-xl group-hover:text-primary-300 transition-colors duration-300", children: "Creative" })
          ] }),
          /* @__PURE__ */ jsxs2("div", { className: "hidden md:flex items-center space-x-8", children: [
            navigation.map((item) => /* @__PURE__ */ jsx3(
              Link,
              {
                to: item.href,
                className: `nav-link ${location.pathname === item.href ? "active" : ""}`,
                children: item.name
              },
              item.name
            )),
            /* @__PURE__ */ jsx3(Link, { to: "/contact", className: "btn-primary", children: "Get Started" })
          ] }),
          /* @__PURE__ */ jsx3("div", { className: "md:hidden", children: /* @__PURE__ */ jsx3(
            "button",
            {
              onClick: () => setIsOpen(!isOpen),
              "aria-label": "Toggle menu",
              className: "text-white hover:text-primary-300 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10",
              children: isOpen ? /* @__PURE__ */ jsx3(X, { size: 24 }) : /* @__PURE__ */ jsx3(Menu, { size: 24 })
            }
          ) })
        ] }),
        isOpen && /* @__PURE__ */ jsxs2("div", { className: "md:hidden mt-6 py-4 space-y-6 animate-fade-in border-t border-white/10", children: [
          navigation.map((item) => /* @__PURE__ */ jsx3(
            Link,
            {
              to: item.href,
              className: `block nav-link text-center ${location.pathname === item.href ? "active" : ""}`,
              onClick: () => setIsOpen(!1),
              children: item.name
            },
            item.name
          )),
          /* @__PURE__ */ jsx3(
            Link,
            {
              to: "/contact",
              className: "block btn-primary text-center mt-4",
              onClick: () => setIsOpen(!1),
              children: "Get Started"
            }
          )
        ] })
      ] })
    }
  );
}

// app/components/Footer.tsx
import { Heart, Twitter, Instagram, Linkedin, Github, Phone, Mail, MapPin } from "lucide-react";
import { Link as Link2 } from "@remix-run/react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function Footer() {
  return /* @__PURE__ */ jsx4("footer", { className: "bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20", children: /* @__PURE__ */ jsxs3("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs3("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs3("div", { className: "md:col-span-4 space-y-6", children: [
        /* @__PURE__ */ jsxs3("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx4("div", { className: "w-10 h-10 bg-gradient-to-br from-secondary-600 to-primary-600 rounded-xl flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx4("span", { className: "text-white font-bold text-lg", children: "C" }) }),
          /* @__PURE__ */ jsx4("span", { className: "text-white font-bold text-xl", children: "Creative" })
        ] }),
        /* @__PURE__ */ jsx4("p", { className: "text-slate-400 text-sm leading-relaxed", children: "Transforming ideas into exceptional digital experiences. We are passionate about creating innovative solutions that help businesses thrive in the digital world." }),
        /* @__PURE__ */ jsxs3("div", { className: "flex items-center space-x-4 pt-2", children: [
          /* @__PURE__ */ jsx4("a", { href: "#", className: "bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors", children: /* @__PURE__ */ jsx4(Twitter, { size: 18, className: "text-slate-300" }) }),
          /* @__PURE__ */ jsx4("a", { href: "#", className: "bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors", children: /* @__PURE__ */ jsx4(Instagram, { size: 18, className: "text-slate-300" }) }),
          /* @__PURE__ */ jsx4("a", { href: "#", className: "bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors", children: /* @__PURE__ */ jsx4(Linkedin, { size: 18, className: "text-slate-300" }) }),
          /* @__PURE__ */ jsx4("a", { href: "#", className: "bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors", children: /* @__PURE__ */ jsx4(Github, { size: 18, className: "text-slate-300" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx4("h3", { className: "font-semibold text-lg mb-4 text-white", children: "Services" }),
        /* @__PURE__ */ jsxs3("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(Link2, { to: "/services", className: "text-slate-400 hover:text-primary-400 transition-colors text-sm", children: "Web Design" }) }),
          /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(Link2, { to: "/services", className: "text-slate-400 hover:text-primary-400 transition-colors text-sm", children: "Development" }) }),
          /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(Link2, { to: "/services", className: "text-slate-400 hover:text-primary-400 transition-colors text-sm", children: "Branding" }) }),
          /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(Link2, { to: "/services", className: "text-slate-400 hover:text-primary-400 transition-colors text-sm", children: "Marketing" }) }),
          /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(Link2, { to: "/services", className: "text-slate-400 hover:text-primary-400 transition-colors text-sm", children: "Consulting" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx4("h3", { className: "font-semibold text-lg mb-4 text-white", children: "Company" }),
        /* @__PURE__ */ jsxs3("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(Link2, { to: "/about", className: "text-slate-400 hover:text-primary-400 transition-colors text-sm", children: "About Us" }) }),
          /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(Link2, { to: "/about", className: "text-slate-400 hover:text-primary-400 transition-colors text-sm", children: "Careers" }) }),
          /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(Link2, { to: "/about", className: "text-slate-400 hover:text-primary-400 transition-colors text-sm", children: "Case Studies" }) }),
          /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(Link2, { to: "/about", className: "text-slate-400 hover:text-primary-400 transition-colors text-sm", children: "Blog" }) }),
          /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(Link2, { to: "/contact", className: "text-slate-400 hover:text-primary-400 transition-colors text-sm", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx4("h3", { className: "font-semibold text-lg mb-4 text-white", children: "Contact Us" }),
        /* @__PURE__ */ jsxs3("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs3("li", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx4(MapPin, { size: 20, className: "text-primary-400 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsx4("span", { className: "text-sm text-slate-400", children: "123 Innovation Street, Tech City, CA 94043, United States" })
          ] }),
          /* @__PURE__ */ jsxs3("li", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsx4(Phone, { size: 20, className: "text-primary-400 flex-shrink-0" }),
            /* @__PURE__ */ jsx4("span", { className: "text-sm text-slate-400", children: "+1 (555) 123-4567" })
          ] }),
          /* @__PURE__ */ jsxs3("li", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsx4(Mail, { size: 20, className: "text-primary-400 flex-shrink-0" }),
            /* @__PURE__ */ jsx4("span", { className: "text-sm text-slate-400", children: "info@creativeagency.com" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx4("div", { className: "border-t border-slate-800 mt-12 pt-8 text-center", children: /* @__PURE__ */ jsxs3("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [
      /* @__PURE__ */ jsxs3("p", { className: "text-slate-500 text-sm", children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Creative Agency. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-center space-x-2 mt-4 md:mt-0", children: [
        /* @__PURE__ */ jsx4("span", { className: "text-sm text-slate-500", children: "Made with" }),
        /* @__PURE__ */ jsx4(Heart, { className: "w-4 h-4 text-secondary-500" }),
        /* @__PURE__ */ jsx4("span", { className: "text-sm text-slate-500", children: "by Creative Agency" })
      ] })
    ] }) })
  ] }) });
}

// app/routes/services.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function Services() {
  let services = [
    {
      icon: Palette,
      title: "Web Design",
      description: "Beautiful, user-centric designs that captivate and convert your audience.",
      features: ["UI/UX Design", "Responsive Design", "Brand Integration", "Prototyping"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
    },
    {
      icon: Code,
      title: "Development",
      description: "Robust, scalable web applications built with cutting-edge technologies.",
      features: ["Frontend Development", "Backend Development", "API Integration", "Performance Optimization"],
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description: "Drive traffic and grow your business with strategic digital marketing.",
      features: ["Search Engine Optimization", "Content Strategy", "Social Media Marketing", "Analytics & Reporting"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage users.",
      features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Store Optimization"],
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
    }
  ], process = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into understanding your business, goals, and target audience."
    },
    {
      step: "02",
      title: "Strategy",
      description: "We develop a comprehensive strategy tailored to your specific needs and objectives."
    },
    {
      step: "03",
      title: "Design",
      description: "Our creative team brings your vision to life with stunning, user-focused designs."
    },
    {
      step: "04",
      title: "Development",
      description: "We build your solution using the latest technologies and best practices."
    },
    {
      step: "05",
      title: "Launch",
      description: "We deploy your project and provide ongoing support to ensure continued success."
    }
  ];
  return /* @__PURE__ */ jsxs4("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxs4("div", { className: "services-gradient min-h-screen relative overflow-hidden", children: [
      /* @__PURE__ */ jsx5(Navigation, {}),
      /* @__PURE__ */ jsxs4("div", { className: "absolute inset-0 opacity-10", children: [
        /* @__PURE__ */ jsx5("div", { className: "absolute top-40 left-40 w-72 h-72 bg-white rounded-full animate-float" }),
        /* @__PURE__ */ jsx5("div", { className: "absolute bottom-40 right-10 w-96 h-96 bg-white rounded-full animate-float", style: { animationDelay: "3s" } })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "relative z-10 container-custom pt-32 pb-16", children: [
        /* @__PURE__ */ jsxs4("div", { className: "text-center animate-fade-in", children: [
          /* @__PURE__ */ jsxs4("h1", { className: "heading-primary text-white mb-8", children: [
            "Our",
            /* @__PURE__ */ jsx5("span", { className: "block gradient-text", children: "Services" })
          ] }),
          /* @__PURE__ */ jsx5("p", { className: "body-large text-white/80 mb-12 max-w-3xl mx-auto", children: "From concept to launch, we provide comprehensive digital solutions that drive results." })
        ] }),
        /* @__PURE__ */ jsx5("div", { className: "mt-20 animate-slide-up", children: /* @__PURE__ */ jsx5("div", { className: "image-overlay", children: /* @__PURE__ */ jsx5(
          "img",
          {
            src: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2",
            alt: "Our services in action",
            className: "w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          }
        ) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx5("section", { className: "section-padding bg-white", children: /* @__PURE__ */ jsx5("div", { className: "container-custom", children: /* @__PURE__ */ jsx5("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: services.map((service, index) => /* @__PURE__ */ jsx5("div", { className: "group", children: /* @__PURE__ */ jsxs4("div", { className: "service-card card-hover", children: [
      /* @__PURE__ */ jsxs4("div", { className: "relative h-64 overflow-hidden", children: [
        /* @__PURE__ */ jsx5(
          "img",
          {
            src: service.image,
            alt: service.title,
            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          }
        ),
        /* @__PURE__ */ jsx5("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }),
        /* @__PURE__ */ jsx5("div", { className: "absolute bottom-4 left-4", children: /* @__PURE__ */ jsx5("div", { className: "w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx5(service.icon, { className: "w-6 h-6 text-white" }) }) })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "p-8", children: [
        /* @__PURE__ */ jsx5("h3", { className: "heading-tertiary text-gray-900 mb-4", children: service.title }),
        /* @__PURE__ */ jsx5("p", { className: "text-gray-600 mb-6 leading-relaxed", children: service.description }),
        /* @__PURE__ */ jsx5("ul", { className: "space-y-3", children: service.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs4("li", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx5(Check, { className: "w-5 h-5 text-green-500 flex-shrink-0" }),
          /* @__PURE__ */ jsx5("span", { className: "text-gray-700", children: feature })
        ] }, featureIndex)) })
      ] })
    ] }) }, index)) }) }) }),
    /* @__PURE__ */ jsx5("section", { className: "section-padding bg-gray-50", children: /* @__PURE__ */ jsxs4("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs4("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx5("h2", { className: "heading-secondary text-gray-900 mb-4", children: "Our Process" }),
        /* @__PURE__ */ jsx5("p", { className: "body-large text-gray-600 max-w-2xl mx-auto", children: "A proven methodology that ensures exceptional results every time" })
      ] }),
      /* @__PURE__ */ jsx5("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-8", children: process.map((step, index) => /* @__PURE__ */ jsxs4("div", { className: "process-step", children: [
        /* @__PURE__ */ jsxs4("div", { className: "relative mb-6", children: [
          /* @__PURE__ */ jsx5("div", { className: "process-number", children: step.step }),
          index < process.length - 1 && /* @__PURE__ */ jsx5("div", { className: "hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -translate-y-1/2" })
        ] }),
        /* @__PURE__ */ jsx5("h3", { className: "text-xl font-semibold text-gray-900 mb-3", children: step.title }),
        /* @__PURE__ */ jsx5("p", { className: "text-gray-600 text-sm leading-relaxed", children: step.description })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx5("section", { className: "section-padding bg-white", children: /* @__PURE__ */ jsxs4("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx5("h2", { className: "heading-secondary text-gray-900 mb-6", children: "Ready to Get Started?" }),
      /* @__PURE__ */ jsx5("p", { className: "body-large text-gray-600 mb-10", children: "Let's discuss your project and see how we can help bring your vision to life." }),
      /* @__PURE__ */ jsxs4(Link3, { to: "/contact", className: "btn-primary inline-flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx5("span", { children: "Start Your Project" }),
        /* @__PURE__ */ jsx5(ArrowRight, { className: "w-5 h-5" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx5(Footer, {})
  ] });
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact
});
import { useState as useState2 } from "react";
import { Mail as Mail2, Phone as Phone2, MapPin as MapPin2, Send, CheckCircle } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function Contact() {
  let [formData, setFormData] = useState2({
    name: "",
    email: "",
    company: "",
    message: ""
  }), [isSubmitted, setIsSubmitted] = useState2(!1), handleSubmit = (e) => {
    e.preventDefault(), setIsSubmitted(!0), setTimeout(() => {
      setIsSubmitted(!1), setFormData({ name: "", email: "", company: "", message: "" });
    }, 3e3);
  }, handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }, contactInfo = [
    {
      icon: Mail2,
      title: "Email Us",
      details: "hello@creative-agency.com",
      description: "Drop us a line anytime"
    },
    {
      icon: Phone2,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin2,
      title: "Visit Us",
      details: "123 Creative Street, Design City, DC 12345",
      description: "Our office is always open for meetings"
    }
  ];
  return /* @__PURE__ */ jsxs5("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxs5("div", { className: "contact-gradient min-h-screen relative overflow-hidden", children: [
      /* @__PURE__ */ jsx6(Navigation, {}),
      /* @__PURE__ */ jsxs5("div", { className: "absolute inset-0 opacity-10", children: [
        /* @__PURE__ */ jsx6("div", { className: "absolute top-20 right-20 w-80 h-80 bg-white rounded-full animate-float" }),
        /* @__PURE__ */ jsx6("div", { className: "absolute bottom-20 left-20 w-64 h-64 bg-white rounded-full animate-float", style: { animationDelay: "2s" } })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "relative z-10 container-custom pt-32 pb-16", children: [
        /* @__PURE__ */ jsxs5("div", { className: "text-center animate-fade-in", children: [
          /* @__PURE__ */ jsxs5("h1", { className: "heading-primary text-white mb-8", children: [
            "Let's",
            /* @__PURE__ */ jsx6("span", { className: "block gradient-text", children: "Connect" })
          ] }),
          /* @__PURE__ */ jsx6("p", { className: "body-large text-white/80 mb-12 max-w-3xl mx-auto", children: "Ready to start your next project? We'd love to hear from you and discuss how we can help." })
        ] }),
        /* @__PURE__ */ jsx6("div", { className: "mt-20 animate-slide-up", children: /* @__PURE__ */ jsx6("div", { className: "image-overlay", children: /* @__PURE__ */ jsx6(
          "img",
          {
            src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2",
            alt: "Get in touch with us",
            className: "w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          }
        ) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx6("section", { className: "section-padding bg-white", children: /* @__PURE__ */ jsx6("div", { className: "container-custom", children: /* @__PURE__ */ jsxs5("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx6("h2", { className: "heading-tertiary text-gray-900 mb-8", children: "Send us a message" }),
        isSubmitted ? /* @__PURE__ */ jsxs5("div", { className: "bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-fade-in", children: [
          /* @__PURE__ */ jsx6(CheckCircle, { className: "w-16 h-16 text-green-500 mx-auto mb-4" }),
          /* @__PURE__ */ jsx6("h3", { className: "text-xl font-semibold text-green-800 mb-2", children: "Message Sent Successfully!" }),
          /* @__PURE__ */ jsx6("p", { className: "text-green-700", children: "Thank you for reaching out. We'll get back to you within 24 hours." })
        ] }) : /* @__PURE__ */ jsxs5("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs5("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs5("div", { children: [
              /* @__PURE__ */ jsx6("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 mb-2", children: "Full Name *" }),
              /* @__PURE__ */ jsx6(
                "input",
                {
                  type: "text",
                  id: "name",
                  name: "name",
                  value: formData.name,
                  onChange: handleChange,
                  required: !0,
                  className: "form-input",
                  placeholder: "John Doe"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs5("div", { children: [
              /* @__PURE__ */ jsx6("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address *" }),
              /* @__PURE__ */ jsx6(
                "input",
                {
                  type: "email",
                  id: "email",
                  name: "email",
                  value: formData.email,
                  onChange: handleChange,
                  required: !0,
                  className: "form-input",
                  placeholder: "john@example.com"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs5("div", { children: [
            /* @__PURE__ */ jsx6("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-700 mb-2", children: "Company Name" }),
            /* @__PURE__ */ jsx6(
              "input",
              {
                type: "text",
                id: "company",
                name: "company",
                value: formData.company,
                onChange: handleChange,
                className: "form-input",
                placeholder: "Your Company"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs5("div", { children: [
            /* @__PURE__ */ jsx6("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-2", children: "Message *" }),
            /* @__PURE__ */ jsx6(
              "textarea",
              {
                id: "message",
                name: "message",
                value: formData.message,
                onChange: handleChange,
                required: !0,
                rows: 6,
                className: "form-input resize-none",
                placeholder: "Tell us about your project..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxs5(
            "button",
            {
              type: "submit",
              className: "w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2",
              children: [
                /* @__PURE__ */ jsx6("span", { children: "Send Message" }),
                /* @__PURE__ */ jsx6(Send, { className: "w-5 h-5" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx6("h2", { className: "heading-tertiary text-gray-900 mb-8", children: "Get in touch" }),
        /* @__PURE__ */ jsx6("div", { className: "space-y-8", children: contactInfo.map((info, index) => /* @__PURE__ */ jsxs5("div", { className: "contact-info-card", children: [
          /* @__PURE__ */ jsx6("div", { className: "contact-icon", children: /* @__PURE__ */ jsx6(info.icon, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsxs5("div", { children: [
            /* @__PURE__ */ jsx6("h3", { className: "text-lg font-semibold text-gray-900 mb-1", children: info.title }),
            /* @__PURE__ */ jsx6("p", { className: "text-gray-700 font-medium mb-1", children: info.details }),
            /* @__PURE__ */ jsx6("p", { className: "text-gray-600 text-sm", children: info.description })
          ] })
        ] }, index)) }),
        /* @__PURE__ */ jsx6("div", { className: "mt-12", children: /* @__PURE__ */ jsx6("div", { className: "image-overlay", children: /* @__PURE__ */ jsx6(
          "img",
          {
            src: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
            alt: "Our office",
            className: "w-full rounded-2xl shadow-lg"
          }
        ) }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx6("section", { className: "section-padding bg-gray-50", children: /* @__PURE__ */ jsxs5("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs5("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx6("h2", { className: "heading-secondary text-gray-900 mb-4", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx6("p", { className: "body-large text-gray-600", children: "Quick answers to common questions about our services" })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs5("div", { className: "faq-card", children: [
          /* @__PURE__ */ jsx6("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "How long does a typical project take?" }),
          /* @__PURE__ */ jsx6("p", { className: "text-gray-600 leading-relaxed", children: "Project timelines vary depending on scope and complexity. A standard website typically takes 4-8 weeks, while more complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation." })
        ] }),
        /* @__PURE__ */ jsxs5("div", { className: "faq-card", children: [
          /* @__PURE__ */ jsx6("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "What's included in your web design service?" }),
          /* @__PURE__ */ jsx6("p", { className: "text-gray-600 leading-relaxed", children: "Our web design service includes strategy, UX/UI design, responsive development, content integration, SEO optimization, testing, and launch support. We also provide training and ongoing maintenance options." })
        ] }),
        /* @__PURE__ */ jsxs5("div", { className: "faq-card", children: [
          /* @__PURE__ */ jsx6("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Do you work with small businesses?" }),
          /* @__PURE__ */ jsx6("p", { className: "text-gray-600 leading-relaxed", children: "Absolutely! We work with businesses of all sizes, from startups to enterprises. We offer flexible packages and solutions tailored to fit different budgets and requirements." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx6(Footer, {})
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta2
});
import { Link as Link4 } from "@remix-run/react";
import {
  ArrowRight as ArrowRight2,
  Star,
  Users,
  Award,
  Zap,
  Monitor,
  Brush,
  Code as Code2,
  BarChart,
  MessageCircle,
  ChevronRight,
  ArrowUpRight
} from "lucide-react";
import { useEffect as useEffect3, useState as useState3 } from "react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var meta2 = () => [
  { title: "Creative Agency | Transform Your Digital Presence" },
  { name: "description", content: "We transform ideas into exceptional digital experiences that captivate, engage, and convert your audience." }
];
function Index() {
  let [isVisible, setIsVisible] = useState3({
    stats: !1,
    services: !1,
    testimonials: !1
  });
  useEffect3(() => {
    let observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    }, observers = [], statsObserver = new IntersectionObserver((entries) => {
      entries[0].isIntersecting && (setIsVisible((prev) => ({ ...prev, stats: !0 })), statsObserver.disconnect());
    }, observerOptions), servicesObserver = new IntersectionObserver((entries) => {
      entries[0].isIntersecting && (setIsVisible((prev) => ({ ...prev, services: !0 })), servicesObserver.disconnect());
    }, observerOptions), testimonialsObserver = new IntersectionObserver((entries) => {
      entries[0].isIntersecting && (setIsVisible((prev) => ({ ...prev, testimonials: !0 })), testimonialsObserver.disconnect());
    }, observerOptions), statsSection = document.getElementById("stats-section"), servicesSection = document.getElementById("services-section"), testimonialsSection = document.getElementById("testimonials-section");
    return statsSection && statsObserver.observe(statsSection), servicesSection && servicesObserver.observe(servicesSection), testimonialsSection && testimonialsObserver.observe(testimonialsSection), observers.push(statsObserver, servicesObserver, testimonialsObserver), () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);
  let stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "150+", label: "Projects Completed" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Zap, value: "5+", label: "Years Experience" }
  ], services = [
    {
      icon: Monitor,
      title: "Web Design",
      description: "Beautiful, responsive websites that engage your audience and drive conversions."
    },
    {
      icon: Code2,
      title: "Development",
      description: "Custom web applications with clean code and powerful functionality."
    },
    {
      icon: Brush,
      title: "Branding",
      description: "Strategic brand identity that communicates your unique value proposition."
    },
    {
      icon: BarChart,
      title: "Marketing",
      description: "Data-driven marketing strategies that deliver measurable results."
    }
  ], testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "Creative Agency transformed our vision into reality. Their attention to detail and creativity exceeded our expectations."
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateCorp",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "Working with this team was an absolute pleasure. They delivered exceptional results on time and within budget."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      quote: "The level of professionalism and creativity is unmatched. Our brand has never looked better!"
    }
  ];
  return /* @__PURE__ */ jsxs6("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxs6("div", { className: "hero-gradient min-h-screen relative overflow-hidden pattern-dots", children: [
      /* @__PURE__ */ jsx7(Navigation, {}),
      /* @__PURE__ */ jsxs6("div", { className: "absolute inset-0 opacity-10", children: [
        /* @__PURE__ */ jsx7("div", { className: "absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-float" }),
        /* @__PURE__ */ jsx7("div", { className: "absolute top-1/2 right-1/4 w-64 h-64 bg-white rounded-full animate-float", style: { animationDelay: "2s" } }),
        /* @__PURE__ */ jsx7("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 animate-float", style: { animationDelay: "4s" } })
      ] }),
      /* @__PURE__ */ jsx7("div", { className: "relative z-10 container-custom pt-32 pb-16", children: /* @__PURE__ */ jsxs6("div", { className: "flex flex-col lg:flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxs6("div", { className: "lg:w-1/2 text-left animate-fade-in lg:pr-10", children: [
          /* @__PURE__ */ jsxs6("h1", { className: "heading-primary text-white mb-6", children: [
            "We Create",
            /* @__PURE__ */ jsx7("span", { className: "block gradient-text animate-pulse-slow", children: "Digital Magic" })
          ] }),
          /* @__PURE__ */ jsx7("p", { className: "body-large text-white/80 mb-8 max-w-xl", children: "Transform your ideas into stunning digital experiences that captivate, engage, and convert your audience. We blend creativity with technology to deliver results." }),
          /* @__PURE__ */ jsxs6("div", { className: "flex flex-wrap gap-6", children: [
            /* @__PURE__ */ jsxs6(Link4, { to: "/services", className: "btn-primary inline-flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx7("span", { children: "Explore Services" }),
              /* @__PURE__ */ jsx7(ArrowRight2, { className: "w-5 h-5" })
            ] }),
            /* @__PURE__ */ jsx7(Link4, { to: "/about", className: "btn-secondary", children: "Learn More" })
          ] })
        ] }),
        /* @__PURE__ */ jsx7("div", { className: "lg:w-1/2 mt-12 lg:mt-0 animate-slide-up", children: /* @__PURE__ */ jsxs6("div", { className: "relative image-overlay", children: [
          /* @__PURE__ */ jsx7(
            "img",
            {
              src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2",
              alt: "Creative workspace",
              className: "w-full rounded-3xl shadow-2xl"
            }
          ),
          /* @__PURE__ */ jsx7("div", { className: "absolute -top-8 -left-8 w-24 h-24 bg-secondary-500/30 rounded-full backdrop-blur-lg animate-float" }),
          /* @__PURE__ */ jsx7("div", { className: "absolute -bottom-8 -right-8 w-32 h-32 bg-primary-500/30 rounded-full backdrop-blur-lg animate-float", style: { animationDelay: "2s" } }),
          /* @__PURE__ */ jsx7("div", { className: "absolute top-1/2 left-0 -translate-x-1/2 transform w-16 h-16 bg-white/20 rounded-full backdrop-blur-lg animate-float", style: { animationDelay: "3s" } })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx7("section", { id: "stats-section", className: "relative", children: /* @__PURE__ */ jsx7("div", { className: "container-custom", children: /* @__PURE__ */ jsx7("div", { className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-12 z-20 relative ${isVisible.stats ? "animate-fade-in" : "opacity-0"}`, children: stats.map((stat, index) => /* @__PURE__ */ jsxs6(
      "div",
      {
        className: "stats-card",
        style: { animationDelay: `${index * 200}ms` },
        children: [
          /* @__PURE__ */ jsx7("div", { className: "stats-icon", children: /* @__PURE__ */ jsx7(stat.icon, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx7("div", { className: "text-3xl font-bold text-gray-900 mb-2", children: stat.value }),
          /* @__PURE__ */ jsx7("div", { className: "text-gray-600 font-medium", children: stat.label })
        ]
      },
      index
    )) }) }) }),
    /* @__PURE__ */ jsx7("section", { id: "services-section", className: "section-padding bg-white", children: /* @__PURE__ */ jsxs6("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs6("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs6("h2", { className: "heading-secondary mb-4", children: [
          "Our ",
          /* @__PURE__ */ jsx7("span", { className: "text-primary-600", children: "Services" })
        ] }),
        /* @__PURE__ */ jsx7("p", { className: "body-large text-gray-600 max-w-2xl mx-auto", children: "We offer a comprehensive range of digital services to help your business thrive" })
      ] }),
      /* @__PURE__ */ jsx7("div", { className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible.services ? "animate-fade-in" : "opacity-0"}`, children: services.map((service, index) => /* @__PURE__ */ jsxs6(
        "div",
        {
          className: "feature-card card-hover",
          style: { animationDelay: `${index * 200}ms` },
          children: [
            /* @__PURE__ */ jsx7("div", { className: "feature-icon-wrapper", children: /* @__PURE__ */ jsx7(service.icon, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsx7("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: service.title }),
            /* @__PURE__ */ jsx7("p", { className: "text-gray-600 mb-4", children: service.description }),
            /* @__PURE__ */ jsxs6(Link4, { to: "/services", className: "inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group", children: [
              /* @__PURE__ */ jsx7("span", { children: "Learn more" }),
              /* @__PURE__ */ jsx7(ChevronRight, { className: "w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" })
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx7("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxs6(Link4, { to: "/services", className: "btn-outline inline-flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx7("span", { children: "View All Services" }),
        /* @__PURE__ */ jsx7(ArrowUpRight, { className: "w-4 h-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs6("section", { className: "py-16 bg-gradient-to-r from-secondary-600 to-primary-600 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx7("div", { className: "absolute inset-0 pattern-dots opacity-10" }),
      /* @__PURE__ */ jsx7("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsxs6("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between", children: [
        /* @__PURE__ */ jsxs6("div", { className: "mb-8 md:mb-0 md:mr-8", children: [
          /* @__PURE__ */ jsx7("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-4", children: "Ready to transform your digital presence?" }),
          /* @__PURE__ */ jsx7("p", { className: "text-white/90", children: "Let's create something amazing together." })
        ] }),
        /* @__PURE__ */ jsx7(Link4, { to: "/contact", className: "btn-secondary whitespace-nowrap self-start", children: "Get in Touch" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx7("section", { id: "testimonials-section", className: "section-padding bg-slate-50", children: /* @__PURE__ */ jsxs6("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs6("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs6("h2", { className: "heading-secondary mb-4", children: [
          "What Our ",
          /* @__PURE__ */ jsx7("span", { className: "text-primary-600", children: "Clients Say" })
        ] }),
        /* @__PURE__ */ jsx7("p", { className: "body-large text-gray-600 max-w-2xl mx-auto", children: "Don't just take our word for it - hear from some of our satisfied clients" })
      ] }),
      /* @__PURE__ */ jsx7("div", { className: `grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible.testimonials ? "animate-fade-in" : "opacity-0"}`, children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxs6(
        "div",
        {
          className: "testimonial-card card-hover",
          style: { animationDelay: `${index * 200}ms` },
          children: [
            /* @__PURE__ */ jsxs6("div", { className: "flex items-center mb-6", children: [
              /* @__PURE__ */ jsx7(
                "img",
                {
                  src: testimonial.image,
                  alt: testimonial.name,
                  className: "w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary-100 shadow-md"
                }
              ),
              /* @__PURE__ */ jsxs6("div", { children: [
                /* @__PURE__ */ jsx7("div", { className: "font-semibold text-gray-900", children: testimonial.name }),
                /* @__PURE__ */ jsx7("div", { className: "text-gray-600 text-sm", children: testimonial.role })
              ] })
            ] }),
            /* @__PURE__ */ jsxs6("p", { className: "text-gray-700 italic leading-relaxed", children: [
              '"',
              testimonial.quote,
              '"'
            ] }),
            /* @__PURE__ */ jsx7("div", { className: "mt-4 flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx7(Star, { className: "w-4 h-4 text-yellow-400 fill-yellow-400" }, i)) })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx7("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxs6(Link4, { to: "/contact", className: "inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group", children: [
        /* @__PURE__ */ jsx7(MessageCircle, { className: "w-5 h-5 mr-2" }),
        /* @__PURE__ */ jsx7("span", { children: "Share your experience with us" }),
        /* @__PURE__ */ jsx7(ChevronRight, { className: "w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx7(Footer, {})
  ] });
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
import { Users as Users2, Target, Heart as Heart2, Lightbulb } from "lucide-react";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function About() {
  let values = [
    {
      icon: Heart2,
      title: "Passion-Driven",
      description: "We pour our hearts into every project, ensuring exceptional results that exceed expectations."
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Every decision we make is guided by measurable outcomes and your business success."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of trends and technologies to deliver cutting-edge solutions."
    },
    {
      icon: Users2,
      title: "Collaborative",
      description: "We believe the best results come from working closely with our clients as partners."
    }
  ], team = [
    {
      name: "Alex Thompson",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      bio: "With 10+ years in design, Alex leads our creative vision and ensures every project tells a compelling story."
    },
    {
      name: "Sofia Martinez",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      bio: "Sofia transforms designs into powerful digital experiences with clean, efficient code and attention to detail."
    },
    {
      name: "David Kim",
      role: "Strategy Director",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      bio: "David ensures every project aligns with business goals and delivers measurable results for our clients."
    }
  ];
  return /* @__PURE__ */ jsxs7("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxs7("div", { className: "about-gradient min-h-screen relative overflow-hidden", children: [
      /* @__PURE__ */ jsx8(Navigation, {}),
      /* @__PURE__ */ jsxs7("div", { className: "absolute inset-0 opacity-10", children: [
        /* @__PURE__ */ jsx8("div", { className: "absolute top-20 left-20 w-64 h-64 bg-white rounded-full animate-float" }),
        /* @__PURE__ */ jsx8("div", { className: "absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full animate-float", style: { animationDelay: "2s" } })
      ] }),
      /* @__PURE__ */ jsxs7("div", { className: "relative z-10 container-custom pt-32 pb-16", children: [
        /* @__PURE__ */ jsxs7("div", { className: "text-center animate-fade-in", children: [
          /* @__PURE__ */ jsxs7("h1", { className: "heading-primary text-white mb-8", children: [
            "About",
            /* @__PURE__ */ jsx8("span", { className: "block gradient-text", children: "Our Story" })
          ] }),
          /* @__PURE__ */ jsx8("p", { className: "body-large text-white/80 mb-12 max-w-3xl mx-auto", children: "We're a passionate team of creators, strategists, and innovators dedicated to bringing your vision to life." })
        ] }),
        /* @__PURE__ */ jsx8("div", { className: "mt-20 animate-slide-up", children: /* @__PURE__ */ jsx8("div", { className: "image-overlay", children: /* @__PURE__ */ jsx8(
          "img",
          {
            src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2",
            alt: "Our team collaborating",
            className: "w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          }
        ) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx8("section", { className: "section-padding bg-white", children: /* @__PURE__ */ jsx8("div", { className: "container-custom", children: /* @__PURE__ */ jsxs7("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs7("div", { className: "animate-fade-in", children: [
        /* @__PURE__ */ jsx8("h2", { className: "heading-secondary text-gray-900 mb-6", children: "Our Mission" }),
        /* @__PURE__ */ jsx8("p", { className: "body-medium text-gray-700 mb-6", children: "We believe that great design has the power to transform businesses and touch lives. Our mission is to create digital experiences that not only look beautiful but also drive meaningful results for our clients." }),
        /* @__PURE__ */ jsx8("p", { className: "body-medium text-gray-700", children: "Since our founding in 2018, we've helped over 500 companies tell their stories through compelling design and innovative digital solutions. Every project is an opportunity to push boundaries and exceed expectations." })
      ] }),
      /* @__PURE__ */ jsx8("div", { className: "animate-slide-up", children: /* @__PURE__ */ jsx8("div", { className: "image-overlay", children: /* @__PURE__ */ jsx8(
        "img",
        {
          src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2",
          alt: "Creative process",
          className: "w-full rounded-2xl shadow-lg"
        }
      ) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx8("section", { className: "section-padding bg-gray-50", children: /* @__PURE__ */ jsxs7("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs7("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx8("h2", { className: "heading-secondary text-gray-900 mb-4", children: "Our Values" }),
        /* @__PURE__ */ jsx8("p", { className: "body-large text-gray-600 max-w-2xl mx-auto", children: "These core principles guide everything we do and shape how we work with our clients" })
      ] }),
      /* @__PURE__ */ jsx8("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: values.map((value, index) => /* @__PURE__ */ jsxs7("div", { className: "text-center group", children: [
        /* @__PURE__ */ jsx8("div", { className: "w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg", children: /* @__PURE__ */ jsx8(value.icon, { className: "w-10 h-10 text-white" }) }),
        /* @__PURE__ */ jsx8("h3", { className: "heading-tertiary text-gray-900 mb-4", children: value.title }),
        /* @__PURE__ */ jsx8("p", { className: "text-gray-600 leading-relaxed", children: value.description })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx8("section", { className: "section-padding bg-white", children: /* @__PURE__ */ jsxs7("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs7("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx8("h2", { className: "heading-secondary text-gray-900 mb-4", children: "Meet Our Team" }),
        /* @__PURE__ */ jsx8("p", { className: "body-large text-gray-600 max-w-2xl mx-auto", children: "The talented people behind our success" })
      ] }),
      /* @__PURE__ */ jsx8("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12", children: team.map((member, index) => /* @__PURE__ */ jsxs7("div", { className: "team-card", children: [
        /* @__PURE__ */ jsxs7("div", { className: "relative mb-6", children: [
          /* @__PURE__ */ jsx8(
            "img",
            {
              src: member.image,
              alt: member.name,
              className: "team-image"
            }
          ),
          /* @__PURE__ */ jsx8("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
        ] }),
        /* @__PURE__ */ jsx8("h3", { className: "heading-tertiary text-gray-900 mb-2", children: member.name }),
        /* @__PURE__ */ jsx8("p", { className: "text-lg text-blue-600 font-medium mb-4", children: member.role }),
        /* @__PURE__ */ jsx8("p", { className: "text-gray-600 leading-relaxed", children: member.bio })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx8(Footer, {})
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-LBGERGFG.js", imports: ["/build/_shared/chunk-D5PHZ36T.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2DSNQECG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-DWQM3HQ7.js", imports: ["/build/_shared/chunk-65PCCNDR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-RBHR762I.js", imports: ["/build/_shared/chunk-65PCCNDR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-GSQU47VV.js", imports: ["/build/_shared/chunk-65PCCNDR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services": { id: "routes/services", parentId: "root", path: "services", index: void 0, caseSensitive: void 0, module: "/build/routes/services-JI6V3Y7W.js", imports: ["/build/_shared/chunk-65PCCNDR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "ffca5a8f", hmr: void 0, url: "/build/manifest-FFCA5A8F.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: services_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
