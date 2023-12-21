import { set } from 'mongoose';
import React, {useState} from 'react';

// Search Hobby component for filtering data based on hobby name
function SearchHobby({ onSearch, onDifficultyFilter }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDiff, setFilteredDiff] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    const handleDiff = (e) => {
        setFilteredDiff(e.target.value);
        onDifficultyFilter(e.target.value);
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
            <select 
                className='form-control mr-sm-2'
                value={filteredDiff}
                onChange={handleDiff}
            >
                <option value=''>All Difficulties</option>
                <option value='Beginner'>Beginner</option>
                <option value='Intermediate'>Intermediate</option>
                <option value='Advanced'>Advanced</option>
                <option value='Expert'>Expert</option>
            </select>
            <button className='btn btn-outline-success my-2 my-sm-2' type='submit'>Search</button>
        </form>
    );
}

export default SearchHobby;