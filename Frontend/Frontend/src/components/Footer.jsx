import React from 'react'
import { Star, Play, Dumbbell,
  

  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail } from "lucide-react";

const Footer = () => {
  return (
   <footer className="bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
      {/* Logo & About */}
      <div className="md:col-span-2 flex flex-col items-center md:items-start">
        <div className="flex items-center justify-center md:justify-start mb-4">
          <Dumbbell className="h-8 w-8 text-blue-400 mr-2" />
          <span className="text-xl font-bold">GymPro</span>
        </div>
        <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed max-w-sm">
          Transform your body and mind with our state-of-the-art facilities and expert trainers.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mt-2">
          <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
          <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
          <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">Classes</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">Trainers</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">Membership</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
        <div className="space-y-3 text-gray-400 text-sm">
          <div className="flex items-center justify-center md:justify-start">
            <MapPin className="h-5 w-5 text-blue-400 mr-2" />
            <span>123 Fitness St, City</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Phone className="h-5 w-5 text-blue-400 mr-2" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Mail className="h-5 w-5 text-blue-400 mr-2" />
            <span>info@gympro.com</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-800 mt-10 pt-6 text-center">
      <p className="text-gray-400 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} GymPro. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  )
}

export default Footer
