export default function Button({ textContent, onClickButton }) {
  return (
    <div>
      <button
        className="text-gray-200 rounded-2xl bg-transparent border-gray-200 border-2 w-4/5 mt-6 mb-2 p-7 text-xl font-bold  
      hover:bg-gray-100 hover:text-gray-700  duration-200"
        onClick={onClickButton}
      >
        {textContent}
      </button>
    </div>
  );
}
