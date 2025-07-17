import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <>
    <Navbar />
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            We’d love to hear from you! Fill out the form or reach us directly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-white p-8 rounded-lg shadow space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-2">📍 Address</h4>
              <p className="text-gray-600">123 Fit Lane, Wellness City, IN 411001</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-2">📞 Phone</h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-2">📧 Email</h4>
              <p className="text-gray-600">contact@growfitgym.in</p>
            </div>
          </div>
        </div>

        {/* Optional Map */}
        <div className="mt-16">
          <iframe
            title="Gym Location"
            className="w-full h-72 rounded-lg shadow"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.682176294622!2d79.08815407503077!3d21.123623180549904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c07df5a529e1%3A0xf54917911f234f2c!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1721200000000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  );
};

export default Contact;
