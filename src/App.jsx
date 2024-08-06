import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState("");

  const handleClick = e => setResult(result.concat(e.target.id));

  const clear = () => setResult("");

  const deleteEL = () => setResult(result.slice(0, -1));

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("Error")
    }
  }


  return (
    <>
      <h2 className="font-bold font-mono text-5xl m-5">My Calculator</h2>
      <div className='calculator '>
        <input className="w-11/12 text-right py-4 px-5 font-bold font-mono text-3xl bg-zinc-700 text-white " type="text" value={result} disabled />
        <div className="buttons p-4">
          <div class="grid grid-cols-4 gap-4">
            <button class="operator bg-gray-500 text-white py-4 text-lg rounded-lg hover:bg-gray-700 w-full" onClick={clear}>AC</button>
            <button class="operator bg-gray-500 text-white py-4 text-lg rounded-lg hover:bg-gray-700 w-full" onClick={deleteEL}>DEL</button>
            <button id="." class="operator bg-gray-500 text-white py-4 text-lg rounded-lg hover:bg-gray-700 w-full" onClick={handleClick}>.</button>
            <button id="/" class="operator bg-red-500 text-white py-4 text-lg rounded-lg hover:bg-red-700 w-full" onClick={handleClick}>/</button>
          </div>

          <div class="grid grid-cols-4 gap-4 mt-4">
            <button id="7" class="number bg-blue-500 text-white py-4 text-lg rounded-lg hover:bg-blue-700 w-full" onClick={handleClick}>7</button>
            <button id="8" class="number bg-blue-500 text-white py-4 text-lg rounded-lg hover:bg-blue-700 w-full" onClick={handleClick}>8</button>
            <button id="9" class="number bg-blue-500 text-white py-4 text-lg rounded-lg hover:bg-blue-700 w-full" onClick={handleClick}>9</button>
            <button id="*" class="operator bg-red-500 text-white py-4 text-lg rounded-lg hover:bg-red-700 w-full" onClick={handleClick}>*</button>
          </div>

          <div class="grid grid-cols-4 gap-4 mt-4">
            <button id="4" class="number bg-blue-500 text-white py-4 text-lg rounded-lg hover:bg-blue-700 w-full" onClick={handleClick}>4</button>
            <button id="5" class="number bg-blue-500 text-white py-4 text-lg rounded-lg hover:bg-blue-700 w-full" onClick={handleClick}>5</button>
            <button id="6" class="number bg-blue-500 text-white py-4 text-lg rounded-lg hover:bg-blue-700 w-full" onClick={handleClick}>6</button>
            <button id="-" class="operator bg-red-500 text-white py-4 text-lg rounded-lg hover:bg-red-700 w-full" onClick={handleClick}>-</button>
          </div>

          <div class="grid grid-cols-4 gap-4 mt-4">
            <button id="1" class="number bg-blue-500 text-white py-4 text-lg rounded-lg hover:bg-blue-700 w-full" onClick={handleClick}>1</button>
            <button id="2" class="number bg-blue-500 text-white py-4 text-lg rounded-lg hover:bg-blue-700 w-full" onClick={handleClick}>2</button>
            <button id="3" class="number bg-blue-500 text-white py-4 text-lg rounded-lg hover:bg-blue-700 w-full" onClick={handleClick}>3</button>
            <button id="+" class="operator bg-red-500 text-white py-4 text-lg rounded-lg hover:bg-red-700 w-full" onClick={handleClick}>+</button>
          </div>

          <div class="grid grid-cols-4 gap-4 mt-4">
            <button id="00" class="number bg-blue-500 text-white py-4 text-lg rounded-lg hover:bg-blue-700 w-full" onClick={handleClick}>00</button>
            <button id="0" class="number bg-blue-500 text-white py-4 text-lg rounded-lg hover:bg-blue-700 w-full" onClick={handleClick}>0</button>
            <button id="=" class="operator bg-green-500 text-white py-4 text-lg rounded-lg hover:bg-green-700 col-span-2 w-full" onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
