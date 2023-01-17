// import React, { useState } from "react";

// function First() {
//   const [number, setNumber] = useState("");
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Make sure the number is between 5-7 characters, if not: error
//     if (number.length < 5 || number.length > 7) {
//       setError(true);
//       console.log(number);
//     } else {
//       // set the artnr in the url and get it.
//       setError(false);
//       // fetch(`https://www.partykungen.se/${number}.json`)
//       //   .then(response => response.json())
//       //   .then(data => setData(data))
//       //   .catch(error => console.log(error));
//       //    console.log(data);
//     };

//     return (
//       <div name='home' className='w-full h-screen bg-[#ffffff]'>
//         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
//           <form className="bg-[#39a2df] p-6 rounded-lg">
//             <label className="block font-medium text-gray-700 mb-2">
//               Artikelnummer:
//               <input
//                 className="form-input py-2 px-3 rounded-md text-gray-900"
//                 type="number"
//                 value={number}
//                 onChange={(e) => setNumber(e.target.value)}
//               />
//             </label>
//             {error && (
//               <div className="text-red-500 text-sm">
//                 Artikelnumret ska vara mellan 5 och 7 siffror
//               </div>
//             )}
//             {/* <div>
//             {data.map(item => (
//               <div key={item.id}>
//                 <h2>{item.name}</h2>
//                 <p>{item.width}</p>
//                 <p>{item.height}</p>
//                 <p>{item.depth}</p>
//               </div>
//             ))}
//           </div> */}
//             <button
//               className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
//               type="submit"
//               onClick={handleSubmit}
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   export default First;