import { useState } from "react";
import { FaCopy, FaRegCopy } from "react-icons/fa";
import "./App.css";
import React from "react";
import { LC, NC, SC, UC } from "./data/passChar";

function App() {
  const [length, setLength] = useState(6);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [copied, setCopied] = useState(false);
  const [password, setPassword] = useState("");

  const genratorPasswordHandler = () => {
    let charSet = "";
    let newPassword = "";

    if (uppercase || lowercase || symbol || number) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        newPassword += charSet[randomIndex];
      }

      setPassword(newPassword);
      setCopied(false);
    } else {
      alert("Please select at least one checkbox");
    }
  };

  const copyToClipboard  = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-500 via-amber-500 to-orange-600 p-6">
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-lg border border-white/30">
        <h1 className="text-7xl font-bold mb-6 text-center text-white drop-shadow-lg">
          Password Generator
        </h1>

        {/* Password Length */}
        <div className="mb-6">
          <label className="block text-white mb-2 font-medium">Password Length: {length}</label>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex justify-between items-center bg-white/10 px-4 py-3 rounded-lg shadow-md hover:bg-white/20 transition">
            <label className="text-white font-medium">Uppercase Letters</label>
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
              className="w-5 h-5 text-purple-500 rounded focus:ring-purple-500"
            />
          </div>

          <div className="flex justify-between items-center bg-white/10 px-4 py-3 rounded-lg shadow-md hover:bg-white/20 transition">
            <label className="text-white font-medium">Lowercase Letters</label>
            <input
              type="checkbox"
              checked={lowercase}
              onChange={() => setLowercase(!lowercase)}
              className="w-5 h-5 text-purple-500 rounded focus:ring-purple-500"
            />
          </div>

          <div className="flex justify-between items-center bg-white/10 px-4 py-3 rounded-lg shadow-md hover:bg-white/20 transition">
            <label className="text-white font-medium">Include Numbers</label>
            <input
              type="checkbox"
              checked={number}
              onChange={() => setNumber(!number)}
              className="w-5 h-5 text-purple-500 rounded focus:ring-purple-500"
            />
          </div>

          <div className="flex justify-between items-center bg-white/10 px-4 py-3 rounded-lg shadow-md hover:bg-white/20 transition">
            <label className="text-white font-medium">Include Symbols</label>
            <input
              type="checkbox"
              checked={symbol}
              onChange={() => setSymbol(!symbol)}
              className="w-5 h-5 text-purple-500 rounded focus:ring-purple-500"
            />
          </div>
        </div>
        {/* Password Output & Copy Button */}
        <div className="flex items-center bg-white/20 px-4 py-3 rounded-xl shadow-lg mb-6">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full bg-transparent text-white text-lg font-mono outline-none placeholder-gray-300"
            placeholder="Generate a password..."
          />
          <button
            onClick={copyToClipboard}
            className="ml-3 p-3 rounded-xl bg-purple-500 hover:bg-purple-700 transition shadow-lg"
          >
            {copied ? <FaCopy className="text-white" /> : <FaRegCopy className="text-white" />}
          </button>
        </div>

        {/* Generate Button */}
        <button
          onClick={genratorPasswordHandler}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 px-6 rounded-2xl font-semibold hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2"
        >
          Generate Password
        </button>

        {/* Copy Confirmation */}
        {copied && (
          <div className="mt-4 text-center text-green-400 font-medium animate-bounce">
            Password copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
