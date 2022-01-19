import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
                <span>Hola</span>
                <div className='row'>
                    <div className ="col">
                    <img src="" alt="Profile"></img>
                    <h2 className = "user_name">name</h2>
                    <h4 className ="headline "> headline</h4>
                    <h4 className = "summary"> summary</h4>
                    </div>
                    <div className ="col">
                    <h1 className ="user_skills"></h1>
                    <ul>
                        <li className = "skills"> Skill1 </li>
                        <li className = "skills"> Skill2 </li>
                        <li className = "skills"> Skill3 </li>
                        <li className = "skills"> Skill4 </li>
                        <li className = "skills"> Skill5 </li>
                    </ul>
                    </div>
                </div>
                {this.state.todos.map(item => (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <span>{item.description}</span>
                    </div>
                ))}
                <Container>
                    <Row>
                        <Col>1</Col>
                        <Col>2</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default UserSkills;

