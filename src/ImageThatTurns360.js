
//creates a new react image component
//sets the image to be a circle
//the image is animated
//the image turns 360 degrees
//alt is blank
function ImageThatTurns360() {
    return (
        <img
        className="imageThatTurns360"
        src="https://e7.pngegg.com/pngimages/292/567/png-clipart-magic-8-ball-8-ball-pool-eight-ball-q-pool-8-ball-pool-thumbnail.png"
        alt=""
        style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            animation: "spin 1s infinite linear"
        }}
        />
    );
}

//export the component imageThatTurns360
export default ImageThatTurns360;