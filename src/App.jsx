import { useState } from "react";

const Button = ({ title, onClick, className }) => {
  return (
    <button
      type="button"
      className={`${className} m-1 hover:bg-slate-500 font-bold text-xl w-16 h-16 bg-gray-900 rounded-full `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (input.length > 13) {
      return;
    }
    setInput(value);
    if (value === "=") {
      setResult(eval(input));
      setInput("");
    } else if (value === "del") {
      setInput(input.slice(0, -1));
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (result && !["+", "-", "*", "/"].includes(value)) {
      setResult("");
    } else {
      result && ["+", "-", "*", "/"].includes(value)
        ? setInput(result + value)
        : setInput(input + value);
    }
  };

  // Array of button configurations
  const buttonConfigs = [
    ["C", "(", ")", "del"],
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    [".", "0", "=", "+"],
  ];

  return (
    <main role="main" className="">
      <div className="calculator overflow-x-hidden h-auto my-10 bg-black max-w-sm mx-auto rounded-xl">
        <div className="display flex flex-col items-end p-6 my-2 text-xl border-b-2 border-gray-900 text-white">
          <div className="input h-6 border-2 overflow-hidden border-gray-500 p-4 flex justify-end items-center rounded-md w-full">
            {input}
          </div>
          <div className="result h-6 mt-2 p-4 pb-0 flex justify-end items-center rounded-md w-full">
            {result}
          </div>
        </div>
        <div className="buttons p-6">
          {buttonConfigs.map((row, index) => (
            <div key={index} className="flex gap-4">
              {row.map((title) => (
                <Button
                  key={title}
                  title={title}
                  className={
                    ["C", "del", "(", ")"].includes(title)
                      ? "text-rose-900"
                      : "text-white"
                  }
                  onClick={() => handleClick(title === "X" ? "*" : title)} // Handle multiplication sign
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
