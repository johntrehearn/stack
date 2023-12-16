import { useState, useRef } from 'react';
import Input from './input';
import Output from './output'



function App() {
  const inputType = useRef(null);
  const [array, setArray] = useState([]);

  const handleInput = () => {
    const newArray = [...array];
    newArray.push(inputType.current.value);
    setArray(newArray);
  }

  const handleDelete = () => {
    const newArray = [...array];
    newArray.pop();
    setArray(newArray);
  }

  return (
    <>
    <div>
      <div>


     <h1 className='title'>JT LIFO Queue</h1>
     <div className='output_board'>

     <div className='output'>
      Your current array:
      <Output array={array}/>
     </div>
      </div>
     <h3>Please enter the word add to array</h3>
     <Input
     handleInput={handleInput}
     handleDelete={handleDelete}
     inputType={inputType}/>

     </div>
     
    </div>

    </>
  )
}

export default App
