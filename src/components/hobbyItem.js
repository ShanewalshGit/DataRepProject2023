// Import card components from react-bootstrap
import { Card, CardBody, CardHeader, CardText } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import axios from "axios";

// HobbyItem component to display hobby data
function HobbyItem(props){
    try {
        const altId = props.myHobby.videoUrl.split("/").pop(); // get the video id from the url
        return (
                <div className="cardStyle1">
                    <Card className="cardStyle1">
                        <CardHeader className="cardStyle1"><h1>{props.myHobby.hobbyName}</h1></CardHeader>
                        <CardBody className="cardStyle1">
                            <blockquote className="blockquote mb-0">
                                <img src={props.myHobby.picture} className="imageStyle"></img> {/* display the picture of the hobby*/}
                                <br></br>
                                <br></br>
                            
                            {/* Displays the video of the hobby using the video id from the url */}
                            <iframe
                            src={`https://www.youtube.com/embed/${altId}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen className="videoStyle">
                            </iframe>
                                <br></br>
                                <h4>About</h4>
                                <CardText>{props.myHobby.description}</CardText>
                                <footer>
                                    <h4>Difficulty</h4>
                                    <b>{props.myHobby.difficulty}</b>
                                </footer>

                            </blockquote>
                        </CardBody>
                        <Link to={"/editHobby/"+props.myHobby._id} className="btn btn-secondary">Edit</Link> {/* Link to editHobby.js*/}
                        {/* Delete button to delete hobby data*/}
                        <Button variant="danger" onClick={
                            (e)=>{
                                axios.delete("http://localhost:4000/api/hobby/"+props.myHobby._id)
                                .then((res)=>{
                                    // call parent function to refrest data
                                    let Reload = props.reload();
                                })
                                .catch();
                            }
                        }>Delete</Button>
                    </Card>
                </div>
        );
    }catch {
        return <p>Invalid Video URL</p>;
    }
}
    
export default HobbyItem;