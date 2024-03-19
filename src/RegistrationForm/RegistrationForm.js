import React, { Component } from 'react';
import './RegistrationForm.css'
import '../ComponentWrapper/ComponentWrapper'
import ComponentWrapper from '../ComponentWrapper/ComponentWrapper';
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
            <ComponentWrapper>
            <form className="registration-form" onSubmit={this.handleSubmit}>
                <div className='registration-form__input-box'>
                    <label htmlFor="phone-number">Phone Number:</label>
                    <input className="registration-form__input-field" id="phone-number" type="text" value={phoneNumber} onChange={this.handlePhoneNumberChange} />
                </div>
                <div className='registration-form__input-box'>
                    <label htmlFor="password">Password:</label>
                    <input className="registration-form__input-field" id="password" type="password" value={password} onChange={this.handlePasswordChange} />
                </div>
                
                <div className='registration-form__input-box'>
                    <label htmlFor="name">Name:</label>
                    <input className="registration-form__input-field" id="name" type="text" value={name} onChange={this.handleNameChange} />
                </div>
                
                <div className='registration-form__input-box'>
                    <label htmlFor="surname">Surname:</label>
                    <input className="registration-form__input-field" id="surname" type="text" value={surname} onChange={this.handleSurnameChange} />
                </div>
                
                
                <button type="submit">Register</button>
            </form>
            </ComponentWrapper>
        );
    }
}

export default RegistrationForm;
