function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
