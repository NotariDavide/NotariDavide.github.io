import './App.css';
import { Pooper as Cooter } from './Footer.js'
import Footer from './Footer.js'
import MagicEightBall from './MagicHeightBall';
import ImageThatTurns360 from './ImageThatTurns360';
import Navbar from './Navbar';
import React from 'react';


//sreact statefull component that returns a div
//with a class of App
//whit props
//with state
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: 1,
    }
    //bind click function to this
    this.click = this.click.bind(this);
  }

  click = (n) =>{
    console.log("yeeeeeee" + n);
    this.setState({
      choice: n, 
    })
  }

  render () {
    console.log("rendering App");
    if (this.state.choice === 1) {
      return (
        <div className="App">
          <Navbar fun = {this.click}/>
          <MagicEightBall />
          <Footer />
        </div>
      )
    }
    if (this.state.choice === 2) {
      return (
        <div className="App">
          <Navbar  fun = {this.click}/>
          <ImageThatTurns360 />
          <Footer />
        </div>
      )
    }
    if (this.state.choice === 3) {
      return (
        <div className="App">
          <Navbar fun = {this.click}/>
          <Cooter />
          <Footer />
        </div>
      )
    }
    if (this.state.choice === 4) {
      return (
        <div className="App">
          <Navbar fun = {this.click}/>
          <Cooter />
          <Footer />
        </div>
      )
    }
    
  }
}

//export the component App
export default App;
