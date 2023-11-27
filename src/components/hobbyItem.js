import { Card, CardBody, CardHeader, CardText } from "react-bootstrap";
import { Link } from 'react-router-dom';


function HobbyItem(props){
    try {
        const videoId = new URLSearchParams(new URL(props.myHobby.videoUrl).search).get('v');
        const altId = props.myHobby.videoUrl.split("/").pop();
        return (
            /*
                <h2>{props.myHobby.hobbyName}</h2>
                <p>By {props.myHobby.description}</p>
                <img src={props.myHobby.picture}></img>
                */

                <div className="cardStyle1">
                    <Card className="cardStyle1">
                        <CardHeader className="cardStyle1"><h1>{props.myHobby.hobbyName}</h1></CardHeader>
                        <CardBody className="cardStyle1">
                            <blockquote className="blockquote mb-0">
                                <img src={props.myHobby.picture} className="imageStyle"></img>
                                <br></br>
                                <br></br>
                            <iframe
                            src={`https://www.youtube.com/embed/${altId}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen className="videoStyle">
                            </iframe>
                                <br></br>
                                <CardText><b>About: </b>{props.myHobby.description}</CardText>
                                <footer>
                                    <h4><b>Difficulty: </b>{props.myHobby.difficulty}</h4>
                                </footer>

                            </blockquote>
                        </CardBody>
                        <Link to={"/editHobby/"+props.myHobby._id} className="btn btn-secondary">Edit</Link>
                    </Card>
                </div>
        );
    }catch {
        return <p>Invalid Video URL</p>;
    }
}
    
export default HobbyItem;