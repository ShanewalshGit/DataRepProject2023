import { useEffect, useState } from "react";
import Hobbies from "./hobbies";
import axios from "axios";
import SearchHobby from "./searchHobby";

function FindHobby(){
    // data to be passed using axios with http client, calling to get data from api
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    // UseEffect takes in api link with axious then implements a then catch in case an error occurs
    useEffect(
        ()=>{
            axios.get("http://localhost:4000/api/hobbies") // link to our server
            .then(
                (response)=>{
                    setData(response.data);
                    setFilteredData(response.data);
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
            hobby.hobbyName && hobby.hobbyName.toLowerCase().includes(searchTerm.toLowerCase())
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