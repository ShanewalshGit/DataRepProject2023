import { useEffect, useState } from "react";
import Hobbies from "./hobbies";
import axios from "axios";
import SearchHobby from "./searchHobby"; // SearchHobby component for filtering data
import { set } from "mongoose";

function FindHobby(){
    // data to be passed using axios with http client, calling to get data from api
    const [data, setData] = useState([]); // data from api
    const [filteredData, setFilteredData] = useState([]); // filtered data based on search term
    const [filteredDiff, setFilteredDiff] = useState(''); // filtered data based on difficulty
    const [totalCount, setTotalCount] = useState(0); // total count of hobbies

    // useEffect to get data from api using axios
    useEffect(
        ()=>{
            axios.get("http://localhost:4000/api/hobbies") // link to get data from api
            .then(
                (response)=>{
                    setData(response.data);
                    setFilteredData(response.data); // filtered data based on search term
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                });

            axios.get("http://localhost:4000/api/hobbies/count") // link to get total count of hobbies
            .then(
                (response)=>{
                    setTotalCount(response.data.count);
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                });
        },[]
    );

    // Search function to filter data
    const handleSearch = (searchTerm) => {
        const filtered = data.filter((hobby) =>
            hobby.hobbyName && hobby.hobbyName.toLowerCase().includes(searchTerm.toLowerCase()) // filter data based on hobby name as seach term
        );

        if(filteredDiff) {
            const diffFiltered = filtered.filter((hobby) =>
                hobby.difficulty && hobby.difficulty.toLowerCase().includes(filteredDiff.toLowerCase()) // filter data based on difficulty as seach term
            );
            setFilteredData(diffFiltered);
        } else {
            setFilteredData(filtered);
        }
    };

    const handleDifficultyFilter = (selectedDiff) => {
        setFilteredDiff(selectedDiff);
        handleSearch('');
    }

    //Reload function to refresh data
    const ReloadData = (e) =>{ // reloads data
        axios.get("http://localhost:4000/api/hobbies") // link to our server
        .then(
            (response)=>{
                setData(response.data); // sets data to response data
                setFilteredData(response.data);
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )
    }

    // Displays hobby data
    return (
        <div className="findHobby">
            <SearchHobby onSearch={handleSearch} onDifficultyFilter={handleDifficultyFilter} />
            <Hobbies myHobbies={filteredData} Reload={ReloadData}></Hobbies>
        </div>
    );
}
    
    export default FindHobby;