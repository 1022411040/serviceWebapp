import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Palette, 
  Code, 
  Video, 
  Megaphone, 
  GraduationCap,
  Search,
  ShoppingCart,
  Camera,
  PenTool,
  BarChart,
  Smartphone,
  Globe,
  Clock,
  Shield,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Branding & Design",
      icon: <Palette className="w-8 h-8" />,
      color: "blue",
      services: [
        { name: "Logo Design", price: "Starting at $299" },
        { name: "Brand Identity", price: "Starting at $799" },
        { name: "Marketing Materials", price: "Starting at $399" },
        { name: "Packaging Design", price: "Starting at $599" }
      ]
    },
    {
      title: "Web Development",
      icon: <Code className="w-8 h-8" />,
      color: "purple",
      services: [
        { name: "Custom Websites", price: "Starting at $999" },
        { name: "E-commerce", price: "Starting at $1,999" },
        { name: "Web Applications", price: "Starting at $2,999" },
        { name: "CMS Development", price: "Starting at $1,499" }
      ]
    },
    {
      title: "Video Production",
      icon: <Video className="w-8 h-8" />,
      color: "red",
      services: [
        { name: "Commercials", price: "Starting at $499" },
        { name: "Social Media Videos", price: "Starting at $299" },
        { name: "Product Demos", price: "Starting at $399" },
        { name: "Event Coverage", price: "Starting at $799" }
      ]
    },
    {
      title: "Digital Marketing",
      icon: <Megaphone className="w-8 h-8" />,
      color: "green",
      services: [
        { name: "SEO Optimization", price: "Starting at $499/mo" },
        { name: "Social Media Management", price: "Starting at $399/mo" },
        { name: "Email Marketing", price: "Starting at $299/mo" },
        { name: "PPC Advertising", price: "Starting at $599/mo" }
      ]
    },
    {
      title: "Academic Projects",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "yellow",
      services: [
        { name: "College Projects", price: "Starting at $149" },
        { name: "Research Papers", price: "Starting at $199" },
        { name: "Presentations", price: "Starting at $99" },
        { name: "Thesis Assistance", price: "Starting at $499" }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "indigo",
      services: [
        { name: "iOS Apps", price: "Starting at $2,999" },
        { name: "Android Apps", price: "Starting at $2,999" },
        { name: "Cross-Platform", price: "Starting at $3,999" },
        { name: "App Maintenance", price: "Starting at $199/mo" }
      ]
    }
  ];

  const features = [
    { icon: <Search />, title: "Free Consultation", description: "Get expert advice on your project" },
    { icon: <Clock />, title: "Fast Delivery", description: "Quick turnaround without quality compromise" },
    { icon: <Shield />, title: "100% Satisfaction", description: "We guarantee your happiness with our work" },
    { icon: <BarChart />, title: "Results Driven", description: "Focused on achieving your business goals" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100"
          >
            Comprehensive digital solutions tailored to your unique needs
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className={`bg-${category.color}-600 p-6 text-white`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <span className="text-gray-900 font-medium">{service.name}</span>
                        <span className="text-blue-600 font-semibold">{service.price}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/services/${category.title.toLowerCase().replace(/ /g, '-')}`}
                    className="mt-6 inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Not Sure What You Need?
            </h2>
            <p className="text-xl text-gray-100 mb-10">
              Get a free consultation and we'll help you figure it out
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;