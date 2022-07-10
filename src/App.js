import React, { useState } from 'react';

const App = () => {
    const [count, createCount] = useState(0);

    return (
        <div>
            <h1>Hello there</h1>
            <h2>Click tracking</h2>
            <div>
                <p>You clicked {count}</p>
                <button onClick={() => createCount(count + 1)}>Click me</button>
            </div>
        </div>
    )
}

export default App;