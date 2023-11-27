import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { set } from 'mongoose';
export default function EditHobby(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array objects push() method
    const [hobbyName, setName] = useState("");
    const [description, setDesc] = useState("");
    const [picture, setPicture] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [videoUrl, setVideo] = useState("");

    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();
    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/hobby/' + id)
            .then((response) => {
                setName(response.data.hobbyName);
                setDesc(response.data.description);
                setPicture(response.data.picture);
                setDifficulty(response.data.difficulty);
                setVideo(response.data.videoUrl);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newHobby = {
            id: id,
            hobbyName: hobbyName,
            picture: picture,
            description: description,
            difficulty: difficulty,
            videoUrl: videoUrl

        };
        axios.put('http://localhost:4000/api/hobby/' + id, newHobby)
            .then((res) => {
                console.log(res.data);
                navigate('/findHobby');
            });
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Hobby Name: </label>
                    <input type="text"
                        className="form-control"
                        value={hobbyName}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Hobby Picture Url: </label>
                    <input type="text"
                        className="form-control"
                        value={picture}
                        onChange={(e) => setPicture(e.target.value)}
                    />
                </div>
                <div className="form-group">
                <label>Edit Description: </label>
                <input type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDesc(e.target.value)}
                />
                </div>
                <div className="form-group">
                <label>Edit Difficulty: </label>
                <input type="text"
                    className="form-control"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                />
                </div>
                <div className="form-group">
                    <label>Edit Hobby Video Url: </label>
                    <input type="text"
                        className="form-control"
                        value={videoUrl}
                        onChange={(e) => setVideo(e.target.value)}
                    />
                </div>
            <div className="form-group">
    <input type="submit" value="Edit Hobby" className="btn btn-secondary" />
            </div>
        </form>
        </div>
    );
}