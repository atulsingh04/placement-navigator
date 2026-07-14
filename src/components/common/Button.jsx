export default function Button({
  text,
  className = "",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold
      transition-all duration-300
      bg-blue-600
      hover:bg-blue-700
      hover:scale-105
      active:scale-95
      ${className}`}
    >
      {text}
    </button>
  );
}