import React, { useState } from 'react';
import { Button } from '../Button/Button'
import { Header } from './Header/Header'
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="body">
            <Header value={count} />
            <div className="buttons">
                <Button onClick={() => setCount(count - 1)} value="decrement" />
                <Button onClick={() => setCount(count + 1)} value="increment" />
            </div>
            <Button onClick={() => setCount(0)} buttonClass="reset" value="reset" />
        </div>
    );
}

export { Counter };