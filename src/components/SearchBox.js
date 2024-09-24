import React, { useState } from 'react';

const searchBoxStyle = 
{
    padding: '10px',
    fontSize: '16px',
    width: '300px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
};

const SearchBox = ({ onSearch }) => 
{
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => 
    {
        setQuery(event.target.value);
    };

    const handleSearch = () => 
    {
        onSearch(query);
    };

    return (
        <div>
            <input
                type="text"
                style={searchBoxStyle}
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBox;

