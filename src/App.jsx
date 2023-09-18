import { useState } from "react";

const Button = ({ title, onClick, className }) => {
  return (
    <button
      type="button"
      className={`${className} m-1 font-bold text-xl w-20 h-20 bg-gray-900 rounded-full `}
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
    setInput(value);
    if (value === "=") {
      setResult(eval(input));
      setInput("");
    } else if (value === "del") {
      setInput(input.slice(0, -1));
    } else if (value === "c") {
      setInput("");
      setResult("");
    } else {
      result && ["+", "-", "*", "/"].includes(value)
        ? setInput(result + value)
        : setInput(input + value);
    }
  };
  return (
    <div className="">
      <div className="calculator h-[600px] my-20 bg-black max-w-sm mx-auto rounded-xl">
        <div className="display  flex flex-col items-end p-10 my-2 text-xl border-b-2 border-gray-900 text-white">
          <div className="input h-6 border-2 border-gray-900 p-2 flex justify-end items-center rounded-md min-w-[200px]">
            {input}
          </div>
          <div className="result h-6 border-2 mt-2 border-gray-900 p-2 flex justify-end items-center rounded-md min-w-[200px]">
            {result}
          </div>
        </div>
        <div className="buttons p-2">
          <div>
            <Button
              title={"C"}
              className={"text-rose-900"}
              onClick={() => handleClick("c")}
            />
            <Button
              title={"("}
              className={"text-green-600"}
              onClick={() => handleClick("(")}
            />
            <Button
              title={")"}
              className={"text-green-600"}
              onClick={() => handleClick(")")}
            />
            <Button
              title={"del"}
              className={"text-green-600"}
              onClick={() => handleClick("del")}
            />
          </div>
          <div>
            <Button
              title={"7"}
              className={"text-white"}
              onClick={() => handleClick("7")}
            />
            <Button
              title={"8"}
              className={"text-white"}
              onClick={() => handleClick("8")}
            />
            <Button
              title={"9"}
              className={"text-white"}
              onClick={() => handleClick("9")}
            />
            <Button
              title={"/"}
              className={"text-green-600"}
              onClick={() => handleClick("/")}
            />
          </div>
          <div>
            <Button
              title={"4"}
              className={"text-white"}
              onClick={() => handleClick("4")}
            />
            <Button
              title={"5"}
              className={"text-white"}
              onClick={() => handleClick("5")}
            />
            <Button
              title={"6"}
              className={"text-white"}
              onClick={() => handleClick("6")}
            />
            <Button
              title={"X"}
              className={"text-green-600"}
              onClick={() => handleClick("*")}
            />
          </div>
          <div>
            <Button
              title={"1"}
              className={"text-white"}
              onClick={() => handleClick("1")}
            />
            <Button
              title={"2"}
              className={"text-white"}
              onClick={() => handleClick("2")}
            />
            <Button
              title={"3"}
              className={"text-white"}
              onClick={() => handleClick("3")}
            />
            <Button
              title={"-"}
              className={"text-green-600"}
              onClick={() => handleClick("-")}
            />
          </div>
          <div>
            <Button
              title={"."}
              className={"text-white"}
              onClick={() => handleClick(".")}
            />
            <Button
              title={"0"}
              className={"text-white"}
              onClick={() => handleClick("0")}
            />
            <Button
              title={"="}
              className={"text-green-600"}
              onClick={() => handleClick("=")}
            />
            <Button
              title={"+"}
              className={"text-green-600"}
              onClick={() => handleClick("+")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
