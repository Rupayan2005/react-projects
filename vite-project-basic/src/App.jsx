import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-7 shadow-lg bg-white px-3 py-2 rounded-xl border border-black">
          <button
            className="text-black outline-none px-4 py-1 rounded-full shadow-lg border border-black"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            RED
          </button>
          <button
            className="text-black outline-none px-4 py-1 rounded-full shadow-lg border border-black"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            GREEN
          </button>
          <button
            className="text-black outline-none px-4 py-1 rounded-full shadow-lg border border-black"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            BLUE
          </button>
          <button
            className="text-black outline-none px-4 py-1 rounded-full shadow-lg border border-black"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            OLIVE
          </button>
          <button
            className="text-black outline-none px-4 py-1 rounded-full shadow-lg border border-black"
            style={{ backgroundColor: "grey" }}
            onClick={() => setColor("grey")}
          >
            GREY
          </button>
          <button
            className="text-black outline-none px-4 py-1 rounded-full shadow-lg border border-black"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            YELLOW
          </button>
          <button
            className="text-black outline-none px-4 py-1 rounded-full shadow-lg border border-black"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            PINK
          </button>
          <button
            className="text-black outline-none px-4 py-1 rounded-full shadow-lg border border-black"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            PURPLE
          </button>
          <button
            className="text-black outline-none px-4 py-1 rounded-full shadow-lg border border-black"
            style={{ backgroundColor: "lavender" }}
            onClick={() => setColor("lavender")}
          >
            LAVENDER
          </button>
          <button
            className="text-black outline-none px-4 py-1 rounded-full shadow-lg border border-black"
            style={{ backgroundColor: "white" }}
            onClick={() => setColor("white")}
          >
            WHITE
          </button>
          <button
            className="text-white outline-none px-4 py-1 rounded-full shadow-lg border border-white"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            BLACK
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
