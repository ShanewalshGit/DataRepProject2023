import React, {useState} from 'react';

// Search Hobby component for filtering data based on hobby name
function SearchHobby({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        // Form for searching hobbies, used in findHobby.js
        <form onSubmit={handleSearch} className="form-inline my-2 my-lg-0">
            <input 
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search Hobby'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className='btn btn-outline-success my-2 my-sm-2' type='submit'>Search</button>
        </form>
    );
}

export default SearchHobby;