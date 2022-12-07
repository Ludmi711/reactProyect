import { useState } from 'react'

const Counter = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        setCount(count + 1)

    }

    if (count < stock) {
        setCount(count + 1)
    }
    const reset = () => {
        setCount(initial)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => increment()} >sumar click</button>
            <button onClick={() => reset()} > reset</button>
            <button onClick={() => onAdd(count)}  > Agregar al carrito </button>
        </div>
    )
}


export default Counter