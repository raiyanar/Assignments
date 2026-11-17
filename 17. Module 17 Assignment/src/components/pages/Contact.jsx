import Button from "../reusableComponents/Button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8">Contact Ostad Team</h1>
      <p className="text-center mt-4 text-gray-600">We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 mb-8 p-4 bg-gray-800 rounded shadow-md">
        <p className="text-gray-100 mb-4 border-y py-2 border-gray-600">Please fill out the form below and we will get back to you as soon as possible.</p>
        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="focus:border-green-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            id="email"
            className="focus:border-green-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            value={formData.message}
            onChange={handleChange}
            id="message"
            className="focus:border-green-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <Button type="submit" variant="default">
          Send Message
        </Button>
      </form>
    </div>
  );
}
