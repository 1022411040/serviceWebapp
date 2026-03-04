import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      icon: <Zap className="w-6 h-6" />,
      price: { monthly: 499, yearly: 399 },
      description: "Perfect for small businesses just starting out",
      features: [
        "Basic website (5 pages)",
        "Logo design",
        "Social media setup",
        "Email support",
        "Monthly report",
        "1 revision round"
      ],
      notIncluded: [
        "E-commerce functionality",
        "Video production",
        "SEO optimization"
      ],
      color: "blue",
      popular: false
    },
    {
      name: "Professional",
      icon: <Sparkles className="w-6 h-6" />,
      price: { monthly: 999, yearly: 799 },
      description: "Ideal for growing businesses with active marketing",
      features: [
        "Custom website (10 pages)",
        "Complete brand identity",
        "Social media management",
        "Priority support",
        "Weekly reports",
        "3 revision rounds",
        "Basic video editing",
        "SEO optimization"
      ],
      notIncluded: [
        "Advanced e-commerce",
        "Multiple video productions"
      ],
      color: "purple",
      popular: true
    },
    {
      name: "Enterprise",
      icon: <Crown className="w-6 h-6" />,
      price: { monthly: 1999, yearly: 1599 },
      description: "For large organizations with complex needs",
      features: [
        "Advanced web application",
        "Full brand strategy",
        "Complete marketing suite",
        "24/7 dedicated support",
        "Real-time analytics",
        "Unlimited revisions",
        "Full video production",
        "Advanced SEO & PPC",
        "Custom integrations",
        "Dedicated account manager"
      ],
      notIncluded: [],
      color: "orange",
      popular: false
    }
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
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100"
          >
            Choose the perfect plan for your business needs
          </motion.p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-2xl inline-flex">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                  billing === "monthly"
                    ? "bg-white text-gray-900 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                  billing === "yearly"
                    ? "bg-white text-gray-900 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Yearly <span className="text-sm text-green-600">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? "ring-2 ring-purple-600 shadow-2xl scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className={`w-16 h-16 bg-${plan.color}-100 rounded-2xl flex items-center justify-center text-${plan.color}-600 mb-6`}>
                    {plan.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ₹{plan.price[billing]}
                    </span>
                    <span className="text-gray-600">/{billing === "monthly" ? "mo" : "mo (billed yearly)"}</span>
                  </div>

                  <button
                    className={`w-full py-4 rounded-xl font-semibold mb-8 transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-600/25"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    Get Started
                  </button>

                  <div className="space-y-4">
                    <p className="font-semibold text-gray-900">What's included:</p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}

                    {plan.notIncluded.length > 0 && (
                      <>
                        <p className="font-semibold text-gray-900 mt-6">Not included:</p>
                        {plan.notIncluded.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3 opacity-50">
                            <div className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5">✕</div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Can I switch plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                q: "Is there a setup fee?",
                a: "No, there are no hidden fees or setup costs. The price you see is what you pay."
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our services."
              },
              {
                q: "Can I customize a plan?",
                a: "Absolutely! Contact us for custom enterprise solutions tailored to your specific needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;