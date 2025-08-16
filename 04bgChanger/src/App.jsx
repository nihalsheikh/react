import { useState } from 'react'

function App() {
  const [color, setColor] = useState("burlywood")

  return (
    <div
      className="w-full h-screen duration-200 flex flex-col"
      style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex felx-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{backgroundColor: "red"}}
            onClick={() => setColor("red")}
          >
            Red
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{backgroundColor: "#AECBFA"}}
            onClick={() => setColor("#AECBFA")}
          >
            Blue
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{backgroundColor: "#B7E4C7"}}
            onClick={() => setColor("#B7E4C7")}
          >
            Green
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{backgroundColor: "#FFFACD"}}
            onClick={() => setColor("#FFFACD")}
          >
            Yellow
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{backgroundColor: "#D7BDE2"}}
            onClick={() => setColor("#D7BDE2")}
          >
            Purple
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{backgroundColor: "#AAF0D1"}}
            onClick={() => setColor("#AAF0D1")}
          >
            Mint
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{backgroundColor: "#FFDAB9"}}
            onClick={() => setColor("#FFDAB9")}
          >
            Peach
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{backgroundColor: "#E3D6F0"}}
            onClick={() => setColor("#E3D6F0")}
          >
            Lilac
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{backgroundColor: "#FFBCB3"}}
            onClick={() => setColor("#FFBCB3")}
          >
            Coral
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            style={{backgroundColor: "#89CFF0"}}
            onClick={() => setColor("#89CFF0")}
          >
            Teal
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
