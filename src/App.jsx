import { useState } from 'react'
import {Landing} from "./components/Landing.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>Code challenging</p>
      <Landing />
    </div>
  )
}

export default App
