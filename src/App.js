import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./style.css";

const App = () => {
    const [count, createCount] = useState(0);

    return (
        <div>
            <h1 className="headerColor">Hello there</h1>
            <h2>Click tracking</h2>
            <div>
                <p>You clicked {count}</p>
                <Button variant="contained" onClick={() => createCount(count + 1)}>Click me</Button>
            </div>
        </div>
    )
}

export default App;