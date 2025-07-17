import React from 'react'
import Navbar from '../components/Navbar'
import { Star, Play, Dumbbell,
  Users,
  Clock,
  Trophy,
  Heart,
  Shield,
  Calendar,
  CreditCard,
  BarChart3,
  Smartphone,
  MessageSquare,

  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail } from "lucide-react";
import Footer from '../components/Footer';

const Home = () => {
     const features = [
    {
      icon: <Dumbbell className="h-8 w-8 text-blue-600" />,
      title: "Modern Equipment",
      description: "State-of-the-art fitness machines from top brands for safe, effective workouts."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Member Management",
      description: "Track attendance, manage profiles, and streamline onboarding easily."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "24/7 Access Control",
      description: "Smart access with keyless entry and automated visitor management."
    },
    {
      icon: <Trophy className="h-8 w-8 text-blue-600" />,
      title: "Group Classes",
      description: "Join engaging group fitness classes led by expert instructors."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Health Monitoring",
      description: "Track your vitals and progress with built-in health tracking tools."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Security & Compliance",
      description: "Bank-level security, GDPR compliance, and member data safety."
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: "Class Scheduling",
      description: "Book, cancel, or reschedule classes with automated reminders."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "Payment Processing",
      description: "Secure billing, auto-renewals, and detailed transaction reports."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Analytics Dashboard",
      description: "Real-time insights, performance metrics, and revenue analytics."
    }
   
  ];
  return (
    <div>
        <Navbar/>

    {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-yellow-400">Body</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto lg:mx-0">
              Join our premium gym with state-of-the-art equipment, expert trainers, and a supportive community.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition">
                Start Your Journey
              </button>
              <button className="flex items-center justify-center border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Ratings */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-8 space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm">4.9/5 Rating</span>
              </div>
              <div className="text-sm">
                <span className="font-bold">500+</span> Happy Members
              </div>
            </div>
          </div>

          {/* Right Side Feature Grid */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4">
                <FeatureCard title="24/7" subtitle="Access" />
                <FeatureCard title="50+" subtitle="Equipment" />
                <FeatureCard title="15+" subtitle="Trainers" />
                <FeatureCard title="100+" subtitle="Classes" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        Everything You Need to <span className="text-blue-600">Succeed</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
        A powerful and complete fitness management solution tailored to support every part of your gym journey.
      </p>
    </div>

    {/* Feature Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition duration-300 flex flex-col h-full"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
          </div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* footer Section */}
<Footer />

        </div>

        
  )
}

const FeatureCard = ({ title, subtitle }) => (
   <div className="bg-white/20 rounded-lg p-4 text-center">
    <div className="text-2xl font-bold">{title}</div>
    <div className="text-sm">{subtitle}</div>
  </div>
);

export default Home