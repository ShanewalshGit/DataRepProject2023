import { useState } from "react";
import axios from "axios";

function AddHobby(){

    // vars using useState for each input
    const [hobbyName, setName] = useState("");
    const [description, setDesc] = useState("");
    const [picture, setPicture] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [videoUrl, setVideo] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        // displays submitted data to the console
        console.log("Hobby: "+ hobbyName + " About: "+ description + " Difficulty: " + difficulty);

        // hobby var for inputted data
        const hobby = ({
            hobbyName:hobbyName,
            picture:picture,
            description:description,
            difficulty:difficulty,
            videoUrl:videoUrl
        });
        // send inputted hobby data to server.js in BackEnd
        axios.post("http://localhost:4000/api/hobbies",hobby)
        .then()
        .catch();

    }

    return (
        // addHobby component that displays a form for adding more hobbies to the hobby data in findHobby.js
        <div>
            <h2><b>Add Hobby Here!</b></h2>
            <form onSubmit={handleSubmit}>
                {/* Seperate div for each form input for hobbies*/}
                <div className="form-group"> {/* add a hobby name to the api*/}
                    <label>Add Hobby Name: </label>
                    <input type="text"
                    className="form-control"
                    value={hobbyName}
                    onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group"> {/* add a description for hobby to the api*/}
                    <label>Add description: </label>
                    <input type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => { setDesc(e.target.value) }}
                    />
                </div>
                <div className="form-group"> {/* add a hobby picture to the api*/}
                    <label>Add Url for Hobby picture: </label>
                    <input type="text"
                    className="form-control"
                    value={picture}
                    onChange={(e) => { setPicture(e.target.value) }}
                    />
                </div>
                <div className="form-group"> {/* add a difficulty tier to the api*/}
                    <label>Add difficulty for the hobby (Beginner, Intermediate, Advanced, Expert): </label>
                    <input type="text"
                    className="form-control"
                    value={difficulty}
                    onChange={(e) => { setDifficulty(e.target.value) }}
                    />
                </div>
                <div className="form-group"> {/* add a hobby video to the api*/}
                    <label>Add url for video on hobby (Tutorial or showcase): </label>
                    <input type="text"
                    className="form-control"
                    value={videoUrl}
                    onChange={(e) => { setVideo(e.target.value) }}
                    />
                </div>
                <div>
                    {/* submission space for our new hobby*/}
                    <input type="submit" value="Add Hobby"></input>
                </div>
            </form>
        </div>
    );
    }
    
    export default AddHobby;