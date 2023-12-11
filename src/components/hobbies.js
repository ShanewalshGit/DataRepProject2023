import HobbyItem from "./hobbyItem";

function Hobbies(props){
    return (
        <div className="hobbiesGrid">
            {props.myHobbies.map(hobby => (
                <HobbyItem myHobby={hobby} key={hobby._id} reload={()=>{props.Reload();}}></HobbyItem>
            ))}
        </div>
    );
}
    
export default Hobbies;