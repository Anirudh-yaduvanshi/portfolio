import React from "react";
import Form from "./form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[6vw] md:px-[7vw] lg:px-[12vw]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out directly!
        </p>
      </div>

      {/* Responsive Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch w-full max-w-6xl">
        {/* Left: Form with animation */}
        <div className="flex-1 bg-[#0d081f] p-10 rounded-lg shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] border border-gray-700 transform transition duration-700 ease-in-out hover:scale-105 animate-slideInLeft">
          <h3 className="text-xl font-semibold text-white text-center">
            Send me a message 🚀
          </h3>
          <div className="mt-6">
            <Form />
          </div>
        </div>

        {/* Middle: Divider with OR (hidden on mobile, visible on desktop) */}
        <div className="hidden lg:flex flex-col items-center justify-center px-4 animate-fadeIn">
          <div className="w-px h-40 bg-gray-600"></div>
          <span className="text-white font-semibold my-4">OR</span>
          <div className="w-px h-40 bg-gray-600"></div>
        </div>

        {/* Right: Buttons with animation */}
        <div className="flex-1 bg-[#0d081f] p-10 rounded-lg shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] border border-gray-700 transform transition duration-700 ease-in-out hover:scale-105 animate-slideInRight">
          <h3 className="text-xl font-semibold text-white text-center">
            Connect With Me 🚀
          </h3>

          <div className="flex flex-col space-y-4 mt-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/917017138924?text=Hello%20Anirudh!%20I'm%20interested%20in%20hiring%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition text-center"
            >
              WhatsApp Me
            </a>

            {/* Call */}
            <a
              href="tel:+917017138924"
              className="w-full bg-blue-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition text-center"
            >
              Call Me
            </a>

            {/* Email */}
            <a
              href="mailto:yadavanirudh97.25@gmail.com"
              className="w-full bg-purple-600 py-3 text-white font-semibold rounded-md hover:opacity-90 transition text-center"
            >
              Mail Me
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
