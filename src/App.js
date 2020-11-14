import { useState } from 'react';
import Instance from './components/Instance';
import Select from 'react-select';
import './App.css';

const options = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
]


const App = () => {

  const [numberOfInstances, setNumberOfInstances] = useState(6);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleUpdate = (event) => {
    console.log({event})
    setSelectedOption(event.value)
    setNumberOfInstances(event.value)
  }

  return (
    <div className="App">
      <div className="text">
        <p>put the containers in the instances!</p>
      </div>
      <div className="selectInstances">
        <Select
        defaultValue={selectedOption}
        onChange={handleUpdate}
        options={options}
      />
      </div>
      <div className="wrapper">
        {Array(numberOfInstances).fill(<Instance/>)}
      </div>
    </div>
  );
}

export default App;
