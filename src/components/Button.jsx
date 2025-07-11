export default function Button({ children, ...props }) {
  return (
    <div>
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600"
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
