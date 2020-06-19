import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      shoes: []
    }
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/shoe/')
      .then(res => res.json())
      .then(data => console.log(data))
      .then(res=> this.setState({shoe: res}))

  }
  render() {
    return (
      <div>
      <h1>Shoestore</h1>        
        { this.state.shoes.map(shoe => {
          return (
            <h1>Size: {shoe.size }<br />
        Shoe: {shoe.brand_name }<br />
        Manufacturer: {shoe.manufacturer }}<br />
       
        Color: {shoe.color }<br />
        Material: {shoe.material } <br />
        Type: {shoe.shoe_type }<br />
        Fastener: {shoe.fasten_type }<br />
            </h1>
        )})}
      <br/>

      </div>
    );
  }


}

export default App;