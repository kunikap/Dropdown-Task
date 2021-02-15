import React, {useState} from 'react';
import color from "./color"; 
import MySelect from './MySelect';


const options = color.map((d, i) => ({
    value: d,
    label: d
  }));
  console.log(options[0].value, '=============')
const Home = () => {
    const [color, setColor] = useState(options[0].value);
    const [colors, setColors] = useState([options[0].value]);
  return (
    <div className="App">
    <div>
      <MySelect
        value={color}
        options={options}
        onChange={setColor}
        placeholder="Select one..."
      />
    </div>
    <hr />
    <div>
      <MySelect
        multi
        value={colors}
        options={options}
        onChange={setColors}
        placeholder="Select one..."
      />
    </div>
  </div>
  )
}

export default Home;
