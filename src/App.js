import React, { Component } from 'react';
// import logo from './logo.svg';
import List from './List';
import './App.css';
import axios from 'axios';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      people: []

    }
    this.people = this.getChar.bind(this);
  }
  getChar() {

    return axios.get('https://swapi.co/api/people').then((res) => {
      console.log(res.data.results);
      this.setState({people: res.data.results})
    })
  }
  componentDidMount() {
    this.getChar()
  }
  

  render() {
    const { people } = this.state;

    return (
      <div className="App">
     

     <List people={people}/>
     <Footer />
        
      </div>
    );
  }
}

export default App;
