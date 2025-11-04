import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-base">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-12"
          data-aos="fade-up"
        >
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right" className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600">
              Have questions, feedback, or collaboration ideas? We’d love to
              hear from you! Just drop a message below or use our contact info.
            </p>

            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span>support@hobbyhub.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <span>+880 1234-567890</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span>Uttara, Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Contact Form */}
          <div
            data-aos="fade-left"
            className="p-8 rounded-xl border border-gray-200 backdrop-blur-sm bg-opacity-40"
          >
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your message here..."
                  rows="4"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
