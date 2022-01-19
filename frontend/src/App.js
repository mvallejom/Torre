import React, { Component } from 'react';
import UserSkills from './UserSkills';
import './App.css'
import { Container, Row, Col } from 'react-bootstrap';class App extends Component {
  state = {
    todos: [],
    selected:{id:""}
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/'); 
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }
  
  showUser(){
    UserSkills.setState({
      show:true

    })
  }

  render() {
    return (
      <div id="main">
        <div>
          <select id="select_bar" value={this.state.selected.id} onChange={this.handleChange}>    
            {this.state.todos.map(item => (
                <option key={item.id}>{item.name}</option>
            ))}    
            </select>
            <button id="button_search">Search User</button>
        </div>
          <hr></hr>
          <UserSkills dataFromParent ={this.state.selected.id} />
      </div>
    );
  }
}

export default App;