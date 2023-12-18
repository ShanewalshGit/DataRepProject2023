import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap css import
// Bootstrap imports
import Carousel from 'react-bootstrap/Carousel';

function Content() { // Content component that displays the home data
    return (
        <> {/* Fragment for multiple elements, vscode error fix */}
        <br></br>
        {/* Carousel component that rotates through 3 slides of information about the site */}
        <Carousel>
            <Carousel.Item>
                <img
                    className="carousel 1"
                    src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?cs=srgb&dl=pexels-lucie-liz-3165335.jpg&fm=jpg"
                    alt="Hobby Slide 1" />
                <Carousel.Caption>
                    <h3>Browse Hobbies!</h3>
                    <p>Get Information about various hobbies and their difficulties!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel 2"
                    src="https://elnacain.com/wp-content/uploads/2018/03/goal-setting-freelance-writer-768x512.jpg"
                    alt="Hobby Slide 2" />
                <Carousel.Caption>
                    <h3>Make it your own</h3>
                    <p>Add your own hobby data so it's customised to your liking!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel 3"
                    src="https://cdn2.penguin.com.au/covers/original/9781779515179.jpg"
                    alt="Hobby Slide 3" />
                <Carousel.Caption>
                    <h3>Videos</h3>
                    <p>Want something a little more longform? Each hobby entry can include a video for guidance, tips and more!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div>
            {/* Introductory Home page, displays fake reviews and features lists*/}
            <br></br>
            <h2>Welcome to UNeedAHobby!</h2>
            <p>Explore various hobbies and find inspiration for your next passion project.</p>

            <h3>Customer Reviews</h3>
            <ul className="list1">
                <li>"This site helped me discover my love for cooking. Highly recommended!" - John O'Toole</li>
                <li>"I found great resources for woodworking on this site, It's a game-changer!" - Sarah harper</li>
                <li>"The hobby ideas section is fantastic for finding what interests me, I can't wait to try them all!" - Michael Shannon</li>
            </ul>

            <h3>What You Can Do on the Site</h3>
            <ul className="list2">
                <li>Browse through a wide range of hobbies</li>
                <li>Read information and watch tutorials on different hobbies</li>
                <li>Add your own favourite hobby with a short about, picture, difficulty and video</li>
                <li>Made an error with a submission? Don't worry, there's full functionality to update and even delete hobbies presented</li>
            </ul>
        </div></>
    );
}

export default Content;