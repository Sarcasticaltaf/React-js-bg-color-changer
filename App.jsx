import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("#3F3FBF");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex  flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex  flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-yellow-100 shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            hello
          </button>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-yellow-100 shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            btn
          </button>
          <button
            onClick={() => setColor("#448C27")}
            className="outline-none px-4 py-1 rounded-full text-black-100 shadow-lg"
            style={{ backgroundColor: "#448C27" }}
          >
            btn
          </button>
          <button
            onClick={() => setColor("#705697")}
            className="outline-none px-4 py-1 rounded-full text-yellow-100 shadow-lg"
            style={{ backgroundColor: "#705697" }}
          >
            btn
          </button>
          <button
            onClick={() => setColor("#518096")}
            className="outline-none px-4 py-1 rounded-full text-yellow-100 shadow-lg"
            style={{ backgroundColor: "#518096" }}
          >
            btn
          </button>
          <button
            onClick={() => setColor("#9AA0A6")}
            className="outline-none px-4 py-1 rounded-full text-yellow-100 shadow-lg"
            style={{ backgroundColor: "#9AA0A6" }}
          >
            btn
          </button>
          <button
            onClick={() => setColor("#131ef2")}
            className="outline-none px-4 py-1 rounded-full text-yellow-100 shadow-lg"
            style={{ backgroundColor: "#131ef2" }}
          >
            btn
          </button>
        </div>
      </div>
    </div>
  );
}
