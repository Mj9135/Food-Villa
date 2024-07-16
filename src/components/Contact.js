import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center p-4 md:my-4">
      <h1 className="font-bold text-4xl text-neutral-700">Contact Us</h1>
      <h2 className="font-semibold text-2xl my-2 text-neutral-600">
        We'd love to hear from you!
      </h2>
      <p className="font-semibold text-neutral-700 text-center max-w-2xl mb-8">
        Whether you have a question about our services, need assistance with
        your order, or just want to provide feedback, we're here to help. Please
        use the contact information below or fill out the contact form to get in
        touch with us.
      </p>

      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 text-center">
        <h3 className="font-semibold text-xl text-neutral-700">
          Our Contact Information
        </h3>
        <p className="text-neutral-600">
          <strong>Email:</strong> support@tatanagarbites.com
        </p>
        <p className="text-neutral-600">
          <strong>Phone:</strong> +91-9135407413
        </p>
        <p className="text-neutral-600">
          <strong>Address:</strong> 123 Food Street, Jamshedpur, Jharkhand,
          India
        </p>
      </div>
    </div>
  );
};

export default Contact;
