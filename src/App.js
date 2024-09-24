import React from 'react';
import Button from './components/Button';
import SearchBox from './components/SearchBox';

const containerStyle = 
{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#333',
};

const boxStyle = 
{
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center'
};

const searchBoxContainerStyle = 
{
    position: 'absolute',
    top: '10px',
    left: '10px',
};


const App = () =>
    {
    const handleButtonClick = () => 
    {
        alert('Button clicked!');
    };

    const handleSearch = (query) => 
    {
        alert(`Searching for: ${query}`);
    };

    return (
        <div style={containerStyle}>
            <div style={searchBoxContainerStyle}>
                <SearchBox onSearch={handleSearch} />
            </div>
            <div style={boxStyle}>
                <h1>Welcome to My React App!</h1>
                <p>This is a simple application using React.</p>

                <Button label="Click Me" onClick={handleButtonClick} />
            </div>
        </div>
    );
};

export default App;
