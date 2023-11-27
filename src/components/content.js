function Content(){
    return(
            // content component that displays a content space
        <div>
            <h1>Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Content;