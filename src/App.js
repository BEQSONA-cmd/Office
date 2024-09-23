import React from 'react';
import Button from './components/Button';
import SearchBox from './components/SearchBox';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
};

const boxStyle = {
    padding: '1rem',
    border: '1px solid #333',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center'
};

const App = () => {
    const handleButtonClick = () => {
        alert('Button clicked!');
    };

    const handleSearch = (query) => {
        alert(`Searching for: ${query}`);
    };

    return (
        <div style={containerStyle}>
            <div style={boxStyle}>
                <h1>Welcome to My React App!</h1>
                <p>This is a simple application using React.</p>
                <SearchBox onSearch={handleSearch} />
                <Button label="Click Me" onClick={handleButtonClick} />
            </div>
        </div>
    );
};

export default App;
