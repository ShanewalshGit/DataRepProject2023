import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap css import
// Bootstrap imports
import Carousel from 'react-bootstrap/Carousel';

function Content() {
    return (
        <><Carousel>
            <Carousel.Item>
                <img
                    className="carousel 1"
                    src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?cs=srgb&dl=pexels-lucie-liz-3165335.jpg&fm=jpg"
                    alt="First slide" />
                <Carousel.Caption>
                    <h3>Browse Hobbies!</h3>
                    <p>Get Information about various hobbies and their difficulties!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel 2"
                    src="https://elnacain.com/wp-content/uploads/2018/03/goal-setting-freelance-writer-768x512.jpg"
                    alt="Second slide" />
                <Carousel.Caption>
                    <h3>Make it your own</h3>
                    <p>Add your own hobby data so it's customised to your liking!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel 3"
                    src="https://cdn2.penguin.com.au/covers/original/9781779515179.jpg"
                    alt="Third slide" />
                <Carousel.Caption>
                    <h3>Videos</h3>
                    <p>Want something a little more longform? Each hobby entry can include a video for guidance, tips and more!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel><div>

                <br></br>
                <h2>Welcome to the Hobby Research Site!</h2>
                <p>Explore various hobbies and find inspiration for your next passion project.</p>

                <h3>Customer Reviews</h3>
                <ul>
                    <li>"This site helped me discover my love for painting. Highly recommended!" - John</li>
                    <li>"I found great resources for woodworking on this site. It's a game-changer!" - Sarah</li>
                    <li>"The hobby ideas section is fantastic. I can't wait to try them all!" - Michael</li>
                </ul>

                <h3>What You Can Do on the Site</h3>
                <ul>
                    <li>Browse through a wide range of hobbies</li>
                    <li>Read articles and tutorials on different hobbies</li>
                    <li>Connect with fellow hobbyists in the community forum</li>
                    <li>Discover upcoming hobby events and workshops</li>
                    <li>Share your own hobby experiences and tips</li>
                </ul>
            </div></>
    );
}

export default Content;