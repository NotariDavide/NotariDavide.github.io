const footerStyle = {
  backgroundColor: "black"
}
const pStyle = {
  margin : 0,
  color: "white"
}


export default function Footer() {
    return (
      <footer style = {footerStyle}>
        <p style = {pStyle}>&copy;DAVIDE NOTARI 2022</p>
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



//ESEMPIO PER ESPORTARE DUE FUNZIONI DIVERSE DA UN MODULO