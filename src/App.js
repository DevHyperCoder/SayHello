import React from 'react';
import './App.css';

class App extends React.Component {

  constructor (){
    super()
    this.state = {
      hello: "Hello!"
    }
  }

  async componentDidMount(){
    const helloSalutURL = "https://fourtonfish.com/hellosalut/?cc=";
    const apiKey = "YOUR_API_KEY";
    const ipFindURL = "https://api.ipregistry.co/?key="+apiKey;

    const responseIP = await fetch(ipFindURL)

    const ipJSON = await responseIP.json()

    const countryCode = ipJSON.location.country.code

    console.log(countryCode)

    const responseHelloAPI = await fetch(helloSalutURL+countryCode)

    const helloJSON = await responseHelloAPI.json()

    const helloText = helloJSON.hello
    console.log(helloText)

    this.setState({"hello":helloText})

  }

  render(){
  return (
    <div className="container">
      <h1>SayHello</h1>
      <h2 dangerouslySetInnerHTML={{__html: this.state.hello}}></h2>
    </div>
  );
  }
}

export default App;
