import React, {useState} from 'react';
//import {useHistory} from 'react-router-dom';

function SearchHobby({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    //const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSearch} className="form-inline my-2 my-lg-0">
            <input 
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search Hobby'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
        </form>
    );
}

export default SearchHobby;