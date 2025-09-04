function Card({ title, children, className = "" }) {
  return (
    <div
      className={`bg-gray-800 rounded-2xl shadow-lg border border-gray-700 p-4 ${className}`}
    >
      {title && (
        <h2 className="text-lg font-bold text-cyan-400 mb-2">{title}</h2>
      )}
      <div className="text-gray-200">{children}</div>
    </div>
  );
}

export default Card;
