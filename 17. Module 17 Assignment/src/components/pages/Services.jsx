import Card from "../reusableComponents/Card";

export default function Services() {
  const services = [
    { id: 1, name: "Home Tutoring", img: "https://picsum.photos/id/5/5000/3333", description: "Personalized one-on-one tutoring sessions to help you master programming concepts." },
    { id: 2, name: "Online Courses", img: "https://picsum.photos/id/118/5000/3333", description: "Access a variety of online courses designed to enhance your programming skills." },
    { id: 3, name: "Workshops", img: "https://picsum.photos/id/200/5000/3333", description: "Participate in interactive workshops led by industry experts to gain hands-on experience." },
    { id: 4, name: "Project Assistance", img: "https://picsum.photos/id/54/5000/3333", description: "Get guidance and support for your programming projects from our experienced mentors." },
    { id: 5, name: "Career Counseling", img: "https://picsum.photos/id/101/5000/3333", description: "Receive career advice and mentorship to help you navigate the tech industry successfully." },
    { id: 6, name: "Code Reviews", img: "https://picsum.photos/id/166/5000/3333", description: "Submit your code for review and receive constructive feedback to improve your coding skills." },
    { id: 7, name: "Hackathons", img: "https://picsum.photos/id/44/5000/3333", description: "Join our hackathons to collaborate with other developers and showcase your skills." },
    { id: 8, name: "Internship Opportunities", img: "https://picsum.photos/id/90/5000/3333", description: "Gain real-world experience through our internship programs with leading tech companies." },
    { id: 9, name: "Community Support", img: "https://picsum.photos/id/79/5000/3333", description: "Join our community of learners and developers to share knowledge and support each other." },
    { id: 10, name: "Certification Programs", img: "https://picsum.photos/id/81/5000/3333", description: "Earn certifications to validate your programming skills and enhance your resume." },
  ];
  return (
    <div className=" bg-amber-200 text-center">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="text-lg">
          We offer a wide range of services to meet your needs. Our team of experts is dedicated to providing high-quality solutions. The services are designed to cater to different learning styles
          and preferences. Each of our clients receives personalized attention to ensure their success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service) => (
            <Card key={service.id} title={service.name} content={service.description} img={service.img} />
          ))}
        </div>
      </div>
    </div>
  );
}
