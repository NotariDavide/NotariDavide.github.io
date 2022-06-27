//style object for the navbar component
//every link is orizontal
//the navbar is fixed to the top
//the navbar is black
const navbarStyle = {
    backgroundColor: "black",
    borderRadius: "0px",
    padding: "10px",
    margin: "0px",
    top: "0px",
    left: "0px",
    width: "100%",
    textAlign: "center"
}
//style list
//the list is horizontal
const listStyle = {
    listStyleType: "none",
    margin: "0px",
    padding: "0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"

}

//react navbar component
function Navbar(props) {
    console.log(props.fun)
    return (
        <nav className="navbar" style={navbarStyle}>
        <button className="navbar-brand">
            <img src="https://www.pngkey.com/png/full/527-5271518_magic-8-ball-png-transparent-png.png" alt="magic 8 ball" style={{width: "30px", height: "30px"}}/>
        </button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style = {listStyle}>
                <li className="nav-item active">
                    <button className="nav-link" onClick={() => props.fun(1)}>Home </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" onClick={() => props.fun(2)}>Features</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" onClick={() => props.fun(3)}>Pricing</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" onClick={() => props.fun(4)}>Disabled</button>
                </li>
            </ul>
        </div>
        </nav>
    );
}

//export the component navbar
export default Navbar;

