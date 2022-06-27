const footerStyle = {
  backgroundColor: "black"
}
const pStyle = {
  margin : 0,
  color: "white"
}

//react stateless component that returns a footer
function Footer() {
  return (
    <footer style={footerStyle}>
      <p style={pStyle}>  
        <a href="
        https://www.linkedin.com/in/joshua-m-b-a8a8b817b/ 
        ">
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_LinkedIn-1024.png" alt="linkedin" style={{width: "30px", height: "30px"}}/>
        </a>  &nbsp;&nbsp;
      </p>
    </footer>
  );
}

export function Pooper() {
  return (
    <footer style = {footerStyle}>
      <p style = {pStyle}>THIS IS JUST POOP</p>
    </footer>
  );
}

export default Footer;

//ESEMPIO PER ESPORTARE DUE FUNZIONI DIVERSE DA UN MODULO