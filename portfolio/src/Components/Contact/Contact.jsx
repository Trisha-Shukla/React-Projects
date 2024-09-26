// src/components/Contact.js
import React from "react";

function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <form className="max-w-lg w-full space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-gray-800 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-gray-800 text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded-lg bg-gray-800 text-white"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
