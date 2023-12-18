import { useEffect, useState } from "react";
import Hobbies from "./hobbies";
import axios from "axios";
import SearchHobby from "./searchHobby"; // SearchHobby component for filtering data

function FindHobby(){
    // data to be passed using axios with http client, calling to get data from api
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); 

    // useEffect to get data from api using axios
    useEffect(
        ()=>{
            axios.get("http://localhost:4000/api/hobbies") // link to our server
            .then(
                (response)=>{
                    setData(response.data);
                    setFilteredData(response.data); // filtered data based on search term
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        },[]
    );

    // Search function to filter data
    const handleSearch = (searchTerm) => {
        const filtered = data.filter((hobby) =>
            hobby.hobbyName && hobby.hobbyName.toLowerCase().includes(searchTerm.toLowerCase()) // filter data based on hobby name as seach term
        );
        setFilteredData(filtered);
    };

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
            <SearchHobby onSearch={handleSearch}/>
            <Hobbies myHobbies={filteredData} Reload={ReloadData}></Hobbies>
        </div>
    );
}
    
    export default FindHobby;