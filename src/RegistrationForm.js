import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            password: '',
            name: '',
            surname: ''
        };
    }

    handlePhoneNumberChange = (e) => {
        this.setState({ phoneNumber: e.target.value });
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleSurnameChange = (e) => {
        this.setState({ surname: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    fetch('http://localhost/DzenPosBackend/api/v1/registration', {
      method: 'POST',
      headers: {'Content-Type':'test',},
      body: JSON.stringify(this.state)
    })
    .then(data => {
      console.log(data); 
    })
    .catch(error => {
      console.error('Error:', error);
    });
        console.log('Form submitted:', this.state);
    }

    render() {
        const { phoneNumber, password, name, surname } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="phone-number">Phone Number:</label>
                <input id="phone-number" type="text" value={phoneNumber} onChange={this.handlePhoneNumberChange} />
                
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={password} onChange={this.handlePasswordChange} />
                
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" value={name} onChange={this.handleNameChange} />
                
                <label htmlFor="surname">Surname:</label>
                <input id="surname" type="text" value={surname} onChange={this.handleSurnameChange} />
                
                <button type="submit">Register</button>
            </form>
        );
    }
}

export default RegistrationForm;
