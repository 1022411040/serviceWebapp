import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Check,
  Clock,
  Users,
  Star,
  Shield,
  ArrowRight,
  Award,
  TrendingUp,
  Phone,
  Mail,
  Zap,
  Code,
  Palette,
  Video,
  Megaphone,
  GraduationCap
} from "lucide-react";
import { useState } from "react";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // Service icons mapping
  const getServiceIcon = (id) => {
    const icons = {
      branding: <Palette className="w-12 h-12" />,
      webapps: <Code className="w-12 h-12" />,
      video: <Video className="w-12 h-12" />,
      marketing: <Megaphone className="w-12 h-12" />,
      college: <GraduationCap className="w-12 h-12" />
    };
    return icons[id] || <Zap className="w-12 h-12" />;
  };

  const serviceData = {
    branding: {
      title: "Branding & Identity",
      icon: "palette",
      description:
        "Create a memorable brand that resonates with your audience and stands out in the market.",
      longDescription:
        "Your brand is more than just a logo—it's the entire experience your customers have with your business. Our comprehensive branding service helps you define your identity, voice, and visual presence across all touchpoints.",
      price: "$799 - $2,499",
      timeline: "2-4 weeks",
      clients: "50+",
      rating: 4.9,
      features: [
        "Logo Design & Variations",
        "Brand Strategy Development",
        "Color Palette Selection",
        "Typography Guidelines",
        "Brand Voice & Messaging",
        "Marketing Collateral Design",
        "Social Media Kit",
        "Brand Guidelines Document"
      ],
      process: [
        { step: "Discovery", description: "We learn about your business, goals, and target audience" },
        { step: "Research", description: "Market analysis and competitor research" },
        { step: "Concept Development", description: "Creating initial concepts and mood boards" },
        { step: "Design", description: "Developing the visual identity" },
        { step: "Refinement", description: "Fine-tuning based on your feedback" },
        { step: "Delivery", description: "Final assets and brand guidelines" }
      ],
      benefits: [
        "Increased brand recognition",
        "Consistent customer experience",
        "Higher perceived value",
        "Better marketing effectiveness",
        "Stronger emotional connection"
      ],
      faqs: [
        { q: "How long does the branding process take?", a: "Typically 2-4 weeks depending on the complexity and feedback cycles." },
        { q: "What files will I receive?", a: "You'll receive all source files (AI, PSD) and web-ready formats (PNG, SVG, JPG)." },
        { q: "Do you offer revisions?", a: "Yes, we include 3 rounds of revisions in all branding packages." }
      ]
    },
    webapps: {
      title: "Web App Development",
      icon: "code",
      description:
        "Build powerful, scalable web applications using cutting-edge technologies.",
      longDescription:
        "Transform your ideas into reality with our custom web application development. We build scalable, secure, and user-friendly applications that solve real business problems.",
      price: "$2,999 - $9,999",
      timeline: "6-12 weeks",
      clients: "35+",
      rating: 4.8,
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Dashboard & Analytics",
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Real-time Features",
        "Progressive Web Apps"
      ],
      process: [
        { step: "Requirements", description: "Gathering and analyzing your requirements" },
        { step: "Planning", description: "Architecture design and technology selection" },
        { step: "Design", description: "UI/UX design and prototyping" },
        { step: "Development", description: "Agile development with regular updates" },
        { step: "Testing", description: "Comprehensive testing and QA" },
        { step: "Deployment", description: "Launch and post-launch support" }
      ],
      benefits: [
        "Automated business processes",
        "Scalable infrastructure",
        "Enhanced user experience",
        "Data-driven insights",
        "Competitive advantage"
      ],
      faqs: [
        { q: "What technologies do you use?", a: "We use modern tech like React, Node.js, Python, and cloud platforms like AWS and Google Cloud." },
        { q: "Do you provide maintenance?", a: "Yes, we offer ongoing maintenance and support packages." },
        { q: "Can you integrate with existing systems?", a: "Absolutely! We specialize in integrating with existing tools and databases." }
      ]
    },
    video: {
      title: "Video Editing & Production",
      icon: "video",
      description: "Professional video editing and production for all your content needs.",
      longDescription: "Captivate your audience with stunning video content. From concept to final cut, we help you tell your story in the most compelling way possible.",
      price: "$499 - $2,999",
      timeline: "1-3 weeks",
      clients: "75+",
      rating: 4.9,
      features: [
        "Commercial Production",
        "Social Media Videos",
        "Product Demos",
        "Event Coverage",
        "Motion Graphics",
        "Color Grading",
        "Sound Design",
        "Animation"
      ],
      process: [
        { step: "Concept", description: "Developing the creative concept and storyboard" },
        { step: "Pre-production", description: "Planning, scripting, and scheduling" },
        { step: "Production", description: "Filming or gathering assets" },
        { step: "Post-production", description: "Editing, effects, and sound design" },
        { step: "Review", description: "Feedback and revisions" },
        { step: "Delivery", description: "Final video in required formats" }
      ],
      benefits: [
        "Professional quality content",
        "Increased engagement",
        "Better brand storytelling",
        "Versatile content for multiple platforms",
        "Higher conversion rates"
      ],
      faqs: [
        { q: "What equipment do you use?", a: "We use professional cinema cameras, lighting, and audio equipment." },
        { q: "How many revisions are included?", a: "We include 2 rounds of revisions in all video packages." },
        { q: "Do you provide raw footage?", a: "Yes, all raw footage is included in the final delivery." }
      ]
    },
    marketing: {
      title: "Digital Marketing",
      icon: "megaphone",
      description: "Grow your online presence with data-driven marketing strategies.",
      longDescription: "Reach your target audience and drive meaningful engagement with our comprehensive digital marketing services.",
      price: "$499 - $2,499/mo",
      timeline: "Ongoing",
      clients: "60+",
      rating: 4.7,
      features: [
        "SEO Optimization",
        "Social Media Management",
        "Content Marketing",
        "Email Campaigns",
        "PPC Advertising",
        "Analytics & Reporting",
        "Influencer Marketing",
        "Marketing Strategy"
      ],
      process: [
        { step: "Audit", description: "Analyzing your current marketing efforts" },
        { step: "Strategy", description: "Developing a customized marketing plan" },
        { step: "Implementation", description: "Executing campaigns across channels" },
        { step: "Monitoring", description: "Tracking performance and engagement" },
        { step: "Optimization", description: "Refining strategies based on data" },
        { step: "Reporting", description: "Regular performance reports" }
      ],
      benefits: [
        "Increased website traffic",
        "Higher conversion rates",
        "Better ROI on marketing spend",
        "Stronger brand awareness",
        "Deeper customer insights"
      ],
      faqs: [
        { q: "How soon will I see results?", a: "Some channels show results quickly (PPC), while others like SEO take 3-6 months." },
        { q: "Do you guarantee results?", a: "We guarantee continuous improvement and optimization." },
        { q: "Can I cancel anytime?", a: "Yes, our monthly packages have no long-term contracts." }
      ]
    },
    college: {
      title: "Academic Projects",
      icon: "graduation",
      description: "Expert assistance with college projects, research papers, and presentations.",
      longDescription: "Get professional help with your academic projects. Our experts ensure high-quality work that meets your institution's standards.",
      price: "$149 - $999",
      timeline: "3-14 days",
      clients: "200+",
      rating: 4.8,
      features: [
        "Project Development",
        "Research Papers",
        "Presentations",
        "Code Development",
        "Documentation",
        "Literature Review",
        "Data Analysis",
        "Formatting & Citations"
      ],
      process: [
        { step: "Requirements", description: "Understanding your project requirements" },
        { step: "Research", description: "Gathering relevant resources and materials" },
        { step: "Development", description: "Working on the project deliverables" },
        { step: "Review", description: "Quality check and plagiarism scan" },
        { step: "Revisions", description: "Making changes based on feedback" },
        { step: "Delivery", description: "Final project with documentation" }
      ],
      benefits: [
        "High-quality work",
        "On-time delivery",
        "Plagiarism-free content",
        "Expert guidance",
        "Stress-free experience"
      ],
      faqs: [
        { q: "Is this allowed by my institution?", a: "Our work is meant to be a reference and learning tool." },
        { q: "Do you provide plagiarism reports?", a: "Yes, we include a plagiarism report with every project." },
        { q: "Can you help with any subject?", a: "We have experts in various fields including computer science, business, engineering." }
      ]
    }
  };

  const currentService = serviceData[serviceId] || {
    title: serviceId ? serviceId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) : "Service Details",
    icon: "default",
    description: "Detailed information about this service",
    longDescription: "This service includes comprehensive solutions tailored to your specific needs.",
    price: "Contact for pricing",
    timeline: "Varies by project",
    clients: "50+",
    rating: 4.8,
    features: [
      "Custom Solutions",
      "Expert Consultation",
      "Quality Assurance",
      "Timely Delivery",
      "Ongoing Support",
      "Satisfaction Guaranteed"
    ],
    process: [
      { step: "Consultation", description: "Understanding your requirements" },
      { step: "Planning", description: "Creating a project roadmap" },
      { step: "Execution", description: "Delivering high-quality work" },
      { step: "Review", description: "Ensuring your satisfaction" }
    ],
    benefits: [
      "Professional results",
      "Time savings",
      "Cost-effective solutions",
      "Expert guidance",
      "Peace of mind"
    ],
    faqs: [
      { q: "How do I get started?", a: "Contact us for a free consultation to discuss your needs." },
      { q: "What is your turnaround time?", a: "Timelines vary based on project scope." },
      { q: "Do you offer revisions?", a: "Yes, we want you to be completely satisfied with our work." }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with improved gradient and animation */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-lg rounded-3xl flex items-center justify-center">
                {getServiceIcon(serviceId)}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {currentService.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              {currentService.description}
            </p>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section with improved cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2">{currentService.price}</div>
              <div className="text-sm text-gray-600">Starting Price</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2">{currentService.timeline}</div>
              <div className="text-sm text-gray-600">Typical Timeline</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2">{currentService.clients}</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
                {currentService.rating}
                <Star className="w-6 h-6 text-yellow-400 ml-1 fill-current" />
              </div>
              <div className="text-sm text-gray-600">Client Rating</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["overview", "process", "faq"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Service</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {currentService.longDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentService.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentService.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "process" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Working Process</h2>
                <div className="space-y-8 max-w-3xl mx-auto">
                  {currentService.process.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{step.step}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "faq" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                  {currentService.faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h4>
                      <p className="text-gray-600">{faq.a}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100 mb-10">
              Let's discuss your project and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Contact Us Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;