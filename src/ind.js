// import React, { useState } from "react";
// // import ReactDOM from "react-dom";

// import "./styles.css";

// import MySelect from "./MySelect";
// import color from "./color.js";

// const options = color.map((d, i) => ({
//   value: d,
//   label: d
// }));

// function App() {
//   const [color, setColor] = useState(options[0].value);
//   const [colors, setColours] = useState([options[0].value]);
//   return (
//     <div className="App">
//       <div>
//         <MySelect
//           value={color}
//           options={options}
//           onChange={setColor}
//           placeholder="Select one..."
//         />
//       </div>
//       <hr />
//       <div>
//         <MySelect
//           multi
//           value={Colors}
//           options={options}
//           onChange={setColors}
//           placeholder="Select one..."
//         />
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
