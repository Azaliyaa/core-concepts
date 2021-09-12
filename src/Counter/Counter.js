import React, { useState } from 'react';
import { Button } from '../Button/Button'
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="body">
            <h1 className="count" >{`Count: ${count}`}</h1>
            <div className="buttons">
                <Button onClick={() => setCount(count - 1)} value="decrement" />
                <Button onClick={() => setCount(count + 1)} value="increment" />
            </div>
            <Button onClick={() => setCount(0)} buttonClass="reset" value="reset" />
        </div>
    );
}

export { Counter };