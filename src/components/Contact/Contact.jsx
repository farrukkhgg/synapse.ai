import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We would love to hear from you! Whether you have questions, feedback, or just want to say hi, feel free to reach out.
          </p>
        </div>

        <div className="mt-16 max-w-xl sm:mx-auto lg:max-w-2xl">
          <form
            action="#"
            method="POST"
            className="space-y-8 bg-white p-8 rounded-lg shadow-lg ring-1 ring-gray-900/10"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Your Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="block outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  placeholder="Type your message here..."
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block rounded-md bg-green-500 px-6 py-2 text-lg font-semibold text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
