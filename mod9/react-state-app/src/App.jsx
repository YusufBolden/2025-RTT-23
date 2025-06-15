import './App.css'

import Counter from "./components/Counter"
import ShowHideMessage from './components/ShowHideMessage'

function App() {

  return (
    <>
      <div>
      <h1>React State</h1>
      <Counter />
      
      </div>
      <div>
        <ShowHideMessage />
      </div>
    </>
  )
}

export default App
