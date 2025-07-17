import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const membershipPlans = [
  {
    id: 1,
    title: "Basic Plan",
    price: "₹799/month",
    features: [
      "Access to Gym Equipment",
      "1 Personal Training Session",
      "Locker Facility",
    ],
  },
  {
    id: 2,
    title: "Standard Plan",
    price: "₹1299/month",
    features: [
      "All Basic Plan Features",
      "3 Personal Training Sessions",
      "Access to Group Classes",
      "Diet Plan Support",
    ],
  },
  {
    id: 3,
    title: "Premium Plan",
    price: "₹1999/month",
    features: [
      "Unlimited Access",
      "Daily Personal Trainer",
      "Sauna & Steam Access",
      "Customized Diet Plan",
      "Priority Support",
    ],
  },
];

const faqs = [
  {
    question: "Can I cancel my membership anytime?",
    answer:
      "Yes, you can cancel your membership at any time with no cancellation fees.",
  },
  {
    question: "Do you offer trial sessions?",
    answer:
      "Yes, we offer one free trial session with our personal trainer before you join.",
  },
  {
    question: "What are the gym hours?",
    answer:
      "Our gym is open Monday to Sunday, 5:00 AM to 10:00 PM.",
  },
  {
    question: "Is a personal trainer included in all plans?",
    answer:
      "Personal training sessions are included based on your selected plan.",
  },
];

const Membership = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <>
    <Navbar />
    <section className="py-16 bg-gray-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Choose Your <span className="text-blue-600">Membership Plan</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Flexible pricing to match your fitness goals and lifestyle.
        </p>
      </div>

      {/* Membership Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {membershipPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {plan.title}
            </h3>
            <p className="text-2xl font-bold text-blue-600 mb-4">
              {plan.price}
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
              Join Now
            </button>
          </div>
        ))}
      </div>

      {/* FAQs Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-medium text-gray-800 flex justify-between items-center"
              >
                {faq.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Membership;