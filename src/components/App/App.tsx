import { useState } from 'react';
import css from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="css.app">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;