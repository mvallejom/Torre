import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './UserSkills.css'
class UserSkills extends Component {

    state = {
        todos: [],
    };

    async componentDidMount() {
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/${this.props.dataFromParent}`); // fetching the data from api, before the page loaded
            const todos = await res.json();
            this.setState({
                show: false,
                todos
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className ="col" id = "user_info">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/Blank_image.jpg' alt="Profile" className="img-thumbnail"></img>
                    <h2 className = "user_name">name</h2>
                    <h4 className ="headline "> headline</h4>
                    <h4 className = "summary"> summary</h4>
                    </div>
                    <div className ="col" id = "user_skills">
                    <h1 className ="user_skills"> User Skills</h1>
                    <br></br>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Skill 1
                            </button>
                            </h2>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Skill 2
                            </button>
                            </h2>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Skill 3
                            </button>
                            </h2>
                        </div>
                        </div>
                    
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {this.state.todos.map(item => (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <span>{item.description}</span>
                    </div>
                ))}
               
            </div>
        );
    }
}

export default UserSkills;

