import React from 'react';

const conttainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
};

const boxStyle = {
    padding: '1rem',
    border: '1px solid #f4f4f4',
    borderRadius: '5px',
    backgroundColor: '#333'
};

const App = () => {
    return (
        <div style={conttainerStyle}>
            <div style={boxStyle}>
                <h1>Welcome to My React App!</h1>
                <p>This is a simple application using React.</p>
            </div>
        </div>
    );
};

export default App;