import React, { Component } from "react";
import "./Login.css";
import API from "../../utils/API";
import { Modal, Button, Row, Input, Col, CardPanel, Card } from "react-materialize"
import Nav_Bar from "../NavBar"


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            username: "",
            password: ""
        }
    }

    handleInputChange = event => {
        let value = event.target.value;
        let name = event.target.name

        this.setState({
            [name]: value
        });
    };

    handleSubmitSignUp = (e) => {
        e.preventDefault();
        const { name, email, username, password } = this.state;
        let formData = new FormData();

        formData.append('name', name)
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);

        let userData={
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        console.log("userdata", userData)

        API.saveUser({
            userData
        }).then((result) => {
            console.log("result: ", result)
        })

        console.log("username:", this.state.username)
        console.log("username:", this.state.name)
    }


    handleSubmitLogin = (e) => {
        e.preventDefault();
        const { name, email, username, password } = this.state;
        let loginData = new FormData();

        loginData.append('username', username);
        loginData.append('password', password);

        console.log("logindata", loginData)

        // API.saveUser({
        //     name: loginData.name,
        //     email: loginData.email,
        //     username: loginData.username,
        //     password: loginData.password,
        // }).then((result) => {
        //     console.log("result: ", result)
        // })

        console.log("username:", this.state.username)
    }

    render() {

        return (

            <div>
                <Card className='container'>
                <Row>
                    <h5 id='appName'>Listopher Columbus</h5>
                </Row>
                    <Row>
                        <Input onChange={this.handleInputChange} s={12} name="username" label="Username" placeholder="" />
                    </Row>
                    <Row>
                        <Input onChange={this.handleInputChange} name="password" type="password" label="password" s={12} />
                    </Row>
                    <Row>
                        <Button onClick={this.handleSubmitLogin}>Login</Button>
                    </Row>
                    <Modal
                        header='Modal Header'
                        trigger={<Button>Sign Up</Button>}>
                        <Row>
                            <Input onChange={this.handleInputChange} s={12} name="name" label="name" />
                            <Input onChange={this.handleInputChange} s={12} name="username" label="Username" placeholder="Username" />
                            <Input onChange={this.handleInputChange} name="password" type="password" label="password" s={12} />
                            <Input onChange={this.handleInputChange} name="email" type="email" label="Email" s={12} />
                            <Button onClick={this.handleSubmitSignUp}>Create</Button>
                        </Row>
                    </Modal>
                </Card>
                </div>

        );
    }
}

export default Login;