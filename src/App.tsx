import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import addNumbers from "./features/stringCalculator/StringCalculator";

function App() {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to recalculate
      const scrollHeight = textareaRef.current.scrollHeight;
      const maxHeight = 5 * parseFloat(getComputedStyle(textareaRef.current).lineHeight || "20px");
      textareaRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    }

  };

  const handleClick = () => {
    try {
      const result = addNumbers(input);
      toast.success(`Sum of the numbers is ${result}`);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-screen bg-black-800 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-md p-6 sm:p-8 bg-gray-700 rounded-lg shadow-md">
          <h1 className="mb-4 text-xl sm:text-2xl font-bold text-center text-white">
            Enter Numbers
          </h1>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInputChange}
            placeholder="Enter numbers (e.g., 1, 2, 3)"
            rows={1}
            className="w-full px-3 py-2 sm:px-4 sm:py-2 mb-4 text-sm sm:text-lg text-white bg-gray-800 rounded-lg hover:bg-white-600 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 resize-none"
          />
          <button
            onClick={handleClick}
            className="w-full px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-md font-semibold text-black bg-white rounded-lg hover:bg-gray-100"
          >
            Add Numbers
          </button>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
