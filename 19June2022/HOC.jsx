// Higher Order Components
// The components which can take other component as input and can return an enhanced component with some additional functionality

const { useState } = require("react")


const Counter = (props) => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count+1)
    }

    const handleSubtract = () => {
        setCount(count-1)
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>
        </div>
    )
}

// Now the count can go below zero I want to another counter with a limit of count between 0 to 100 only

const CounterOld = (props) => {
    return (
        <div>
            <h3>{props.count}</h3>
            <button onClick={props.add}>Add</button>
            <button onClick={props.subtract}>Subtract</button>
        </div>
    )
}

const HOCCounter = (WrapperComponent, low, high) => {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        if(count-1<low) return
        setCount(count+1)
    }

    const handleSubtract = () => {
        if(count+1>high) return
        setCount(count-1)
    }

    return () => {
        <WrapperComponent count={count} add={handleAdd} subtract={handleSubtract} />
    }

}

const CounterNew = HOCCounter(CounterOld, 0, 100);