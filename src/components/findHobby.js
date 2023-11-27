import { useEffect, useState } from "react";
import Hobbies from "./hobbies";
import axios from "axios";

function FindHobby(){
    // data to be passed using axios with http client, calling to get data from api
    const [data, setData] = useState([]);

    // UseEffect takes in api link with axious then implements a then catch in case an error occurs
    useEffect(
        ()=>{
            axios.get("http://localhost:4000/api/hobbies") // link to our server
            .then(
                (response)=>{
                    setData(response.data);
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        },[]
    );

    // Displays hobby data
    return (
        <div className="findHobby">
            <Hobbies myHobbies={data}></Hobbies>
        </div>
    );
}
    
    export default FindHobby;