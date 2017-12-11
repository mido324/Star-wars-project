import React, { Component } from 'react';
import CharInfo from './CharInfo';
import axios from 'axios';

class List extends Component {
constructor() {
    super()
    this.state = {
        fav: []
    }
}

handleClick(name) {
    axios.post("http://localhost:3003/api/favorites", {name: name}).then(res => {
    console.log(res);
this.setState({ fav: res.data})
    })
}


    render() {
        const people = this.props.people;
        
        const favorite = this.state.fav.map((f) => {
            return <li>{f}</li>
        })
        // console.log(this.state);
        return (

            <div>
               
               {people.map((p) => {
                 

                   return (
                       <div key={p.url}>

<h1 className = "char-name" >{
    p.name
}</h1>

                              
                       

                      <div> <button className="btn btn-success btn-md" onClick={()=> {this.handleClick(p.name)}}>favorites</button>
                          <CharInfo charInfo={p}/>
                       
                       </div>
                     <div className="fav"> {favorite}</div>
                     
                       </div>
                   )
               })}
          
                
            </div>
        );
    }
}

export default List;