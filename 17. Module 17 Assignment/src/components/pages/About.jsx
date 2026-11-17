import Card from "../reusableComponents/Card";
import { Link } from "react-router-dom";
import Button from "../reusableComponents/Button";

export default function About() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Lead Instructor",
      img: "https://img.magnific.com/free-photo/closeup-portrait-caucasian-happy-teacher-glasses_74855-9736.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Jane Smith",
      role: "Curriculum Designer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjtJ9PUp2_4Gh0iwpcAWPCnFk27z3BDpoJfZnyb-2IcOBXwFXLgCs12Hw&s=10",
    },
    {
      name: "Mike Johnson",
      role: "Community Manager",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CMKadfGqOjlt8ZP9dHslyVKIBnyjOX4bQ4InTCtviOFuyJ-UmJqloMyU&s=10",
    },
    {
      name: "Emily Davis",
      role: "Software Engineer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjtJ9PUp2_4Gh0iwpcAWPCnFk27z3BDpoJfZnyb-2IcOBXwFXLgCs12Hw&s=10",
    },
    {
      name: "David Wilson",
      role: "Marketing Specialist",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CMKadfGqOjlt8ZP9dHslyVKIBnyjOX4bQ4InTCtviOFuyJ-UmJqloMyU&s=10",
    },
  ];

  return (
    <div className=" bg-amber-200 text-center">
      <div className="max-w-7xl mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn more about Ostad and our mission to provide high-quality programming education. They are a team of passionate educators and developers dedicated to helping you succeed in your coding
          journey.
        </p>
        {/* company team cards */}
        <section className="py-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {teamMembers.map((member, index) => (
              <Card key={index} title={member.name} content={member.role} img={member.img} />
            ))}
          </div>
        </section>
        <p className="mt-4 text-lg text-gray-600 px-4">If you have any questions or would like to get in touch with us, please feel free to contact us.</p>
        <Link to="/contact" className="mt-4 inline-block">
          <Button text="Contact Us" variant="primary">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
