import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out directly!
        </p>
      </div>

      {/* Contact Options */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <div className="flex flex-col space-y-4 mt-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+917017138924?text=Hello%20Anirudh!%20I'm%20interested%20in%20hiring%20you." // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition text-center"
          >
            WhatsApp Me
          </a>

          {/* Call */}
          <a
            href="tel:+917017138924" // Replace with your phone number
            className="w-full bg-blue-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition text-center"
          >
            Call Me
          </a>

          {/* Email */}
          <a
            href="mailto:yadavanirudh97.25@gmail.com" // Replace with your email
            className="w-full bg-purple-600 py-3 text-white font-semibold rounded-md hover:opacity-90 transition text-center"
          >
            Mail Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
