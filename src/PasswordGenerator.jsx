// import React from 'react'
// export default function PasswordGenerator(){
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
//       <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md border border-white/20">
//         <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//           Password Generator
//         </h1>

//         <div className="mb-6">
//           <label className="block text-gray-700 mb-2 font-medium">Password Length: {length}</label>
//           <input
//             type="range"
//             min="4"
//             max="32"
//             className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-4 mb-8">
//             <label
//               className="flex items-center space-x-2 cursor-pointer p-3 rounded-lg hover:bg-purple-50 transition-colors"
//             >
//               <input
//                 type="checkbox"
//                 checked={value}
//                 className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
//               />
//               <span className="capitalize text-gray-700"></span>
//             </label>
//         </div>

//         <div className="flex gap-4 mb-6">
//           <input
//             type="text"
//             value={password}
//             readOnly
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
//             placeholder="Generate a password..."
//           />
//           <button
//             disabled={!password}
//             className="p-3 bg-purple-100 hover:bg-purple-200 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {copied ? <FaCopy className="text-purple-600" /> : <FaRegCopy className="text-purple-600" />}
//           </button>
//         </div>

//         <button
//           className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
//         >
//           <FaReddo className="text-lg" />
//           Generate Password
//         </button>

//         {copied && (
//           <div className="mt-4 text-center text-green-600 animate-bounce">
//             Password copied to clipboard!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

