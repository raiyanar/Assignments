import Button from "../reusableComponents/Button";

export default function Card({ title, content, img, className }) {
  return (
    <div className={`bg-white p-6 rounded shadow text-center ${className}`}>
      <img src={img} alt={title} className="w-32 h-32 mx-auto mb-4 object-cover" />
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <Button text="Learn More"> Learn More </Button>
    </div>
  );
}
