import './App.css';
import { useState } from "react";

function App() {

  const [val, setval] = useState([])

  const btnhandle = () => {
    
  }

  return (
    <div className="App">
      <div className='ms-auto'>

        <input type="button" value="1" onClick={btnhandle} />
        <input type="button" value="2" onClick={btnhandle} />
        <input type="button" value="3" onClick={btnhandle} />

        <br />

        <input type="button" value="4" onClick={btnhandle} />
        <input type="button" value="5" onClick={btnhandle} />
        <input type="button" value="6" onClick={btnhandle} />

        <br />

        <input type="button" value="7" onClick={btnhandle} />
        <input type="button" value=" " onClick={btnhandle} />
        <input type="button" value="9" onClick={btnhandle} />

      </div>
    </div>
  );
}

export default App;
