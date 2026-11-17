import Card from "../reusableComponents/Card";
import Button from "../reusableComponents/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      title: "JavaScript",
      content: "JavaScript is a programming language that conforms to the ECMAScript specification.",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      title: "Python",
      content: "Python is a high-level, interpreted programming language.",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      title: "Java",
      content: "Java is a class-based, object-oriented programming language.",
      img: "https://upload.wikimedia.org/wikipedia/it/2/2e/Java_Logo.svg?utm_source=it.wikipedia.org&utm_campaign=index&utm_content=original",
    },
  ];

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg border-green-300 border-4 shadow-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800">Welcome to Ostad!</h2>
            <p className="mt-4 text-gray-600 mb-8">We're excited to have you on board.</p>
            <Button text="Close" variant="primary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </div>
        </div>
      )}

      {/* hero section */}
      <section className="bg-amber-200 py-16 text-center">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Ostad</h1>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
            alt="Made in Bangladesh"
            className="w-16 h-16 mx-auto mt-4"
          />
          <p className="mt-2 text-lg text-gray-600">Proudly made in Bangladesh</p>
          <p className="mt-4 text-lg text-gray-600">Your go-to platform for learning programming languages and enhancing your coding skills.</p>
        </div>
        {/* card section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 ">
            {cards.map((card, index) => (
              <Card key={index} title={card.title} content={card.content} img={card.img} />
            ))}
          </div>
        </section>
        {/* call to action section */}
        <section className="bg-blue-500 py-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Start Your Coding Journey?</h2>
            <p className="mt-4 text-lg text-white mb-4">Join thousands of students and start learning today!</p>
            <Link to="/services" className="mt-4 inline-block">
              <Button text="View Services" variant="primary">
                View Services
              </Button>
            </Link>
          </div>
        </section>
        <h2 className="text-3xl font-bold text-gray-800 mt-8">What Our Students Say</h2>
        <p className="mt-4 text-lg text-gray-600">Hear from our satisfied students about their learning experience.</p>
        <Link to="/gallery" className="mt-4 inline-block">
          <Button text="View Testimonials" variant="primary">
            View Testimonials
          </Button>
        </Link>
      </section>
    </div>
  );
}
