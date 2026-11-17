import Button from "../reusableComponents/Button";

export default function Gallery() {
  const successStudents = [
    {
      name: "John Doe",
      course: "JavaScript",
      studentImg: "https://randomuser.me/api/portraits/men/1.jpg",
      testimonial: "This course was amazing! I learned so much about JavaScript and feel confident in my skills now.",
    },
    {
      name: "Jane Smith",
      course: "Python",
      studentImg: "https://randomuser.me/api/portraits/men/2.jpg",
      testimonial: "This course was amazing! I learned so much about Python and feel confident in my skills now.",
    },
    {
      name: "Mike Johnson",
      course: "Java",
      studentImg: "https://randomuser.me/api/portraits/men/3.jpg",
      testimonial: "This course was amazing! I learned so much about Java and feel confident in my skills now.",
    },
    {
      name: "Emily Davis",
      course: "React",
      studentImg: "https://randomuser.me/api/portraits/men/4.jpg",
      testimonial: "This course was amazing! I learned so much about React and feel confident in my skills now.",
    },
    {
      name: "Sarah Wilson",
      course: "Node.js",
      studentImg: "https://randomuser.me/api/portraits/men/5.jpg",
      testimonial: "This course was amazing! I learned so much about Node.js and feel confident in my skills now.",
    },
  ];

  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">Success Stories</h1>
          <p className="mt-4 text-lg text-gray-600">Meet our successful students who have excelled in their programming journey.</p>
        </div>
      </section>

      <section className="bg-gray-100 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 ">
          {successStudents.map((student, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={student.studentImg} alt={student.name} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-xl font-bold text-gray-800 mt-4">{student.name}</h3>
              <p className="text-lg text-gray-600">{student.course}</p>
              <p className="text-md text-gray-500 italic mb-8">"{student.testimonial}"</p>
              <Button text="View Profile" variant="primary">
                View Profile
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
