export default function Button({ children, onClick, variant = "default" }) {
  const baseClasses = "px-4 py-2 rounded focus:outline-none focus:shadow-outline";
  const variantClasses = {
    default: "bg-blue-500 hover:bg-blue-700 text-white cursor-pointer",
    primary: "bg-green-500 hover:bg-green-700 text-white cursor-pointer",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white cursor-pointer",
  };

  const className = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
