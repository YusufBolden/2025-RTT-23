import { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(prevCount => prevCount - 1)
    }

    return (
        <>
        <h2>Counter {counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => setCounter(counter + 5)}>Add 5</button>
        <button onClick={() => setCounter(0)}>Reset Count</button>

        </>
    )
} export default Counter