import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">

      {/* HEADER */}
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Welcome to Tailwind App
      </h1>

      {/* CARD */}
      <div className="bg-white shadow-lg w-full max-w-md p-6 rounded-2xl">
        <p className="text-gray-700 mb-4">
          This card is styled completely with Tailwind CSS utilities.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <button className="
            bg-blue-500 text-white px-4 py-2 rounded-lg
            hover:bg-blue-600 active:bg-blue-700 transition
          ">
            Submit
          </button>

          <button className="
            bg-gray-200 text-gray-800 px-4 py-2 rounded-lg
            hover:bg-gray-300 active:bg-gray-400 transition
          ">
            Cancel
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
