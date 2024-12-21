import { useState } from 'react';
import './App.css';

const App = () =>  {
  const [count,updateCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() => updateCount((prev) => prev+1)}> ROSHAN </button>
      {
        count
      }
    </div>
  );
}

export default App;
