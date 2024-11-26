import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import addNumbers from "./features/stringCalculator/StringCalculator";

function App() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError(false);
  };

  const handleClick = () => {
    try{
      const result = addNumbers(input);
      toast.success(`Sum of the numbers is ${result}`)
    } catch(err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      toast.error(errorMessage)
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-screen bg-black-800 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-md p-6 sm:p-8 bg-gray-700 rounded-lg shadow-md">
          <h1 className="mb-4 text-xl sm:text-2xl font-bold text-center text-white">
            Enter Numbers
          </h1>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter numbers (e.g., 1, 2, 3)"
            className={`w-full px-3 py-2 sm:px-4 sm:py-2 mb-4 text-sm sm:text-lg text-white rounded-lg hover:bg-white-600 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
              error ? 'border-red-500 animate-shake' : 'border-gray-300'
            }`}
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
