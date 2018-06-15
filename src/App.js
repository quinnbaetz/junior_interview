import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Tasks:
1. Add a submit button
2. When submit button is clicked run validation on the form.
  a.  Use isValidEmail to check the email
  b.  Write a validation function to ensure the password is at least 8 characters
3. If a validation error exists show red "Form Invalid" text below the button
  a. Remove the "Form Invalid" text when the user starts editing the form
5. If no validation errors exist show green "Form Valid" text below the button
*/

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmit: (e) => {
    //Implement this after adding a submit button
  }

  onFieldChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    return (
      <div className="App">
        <form>
          <fieldset>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='text' name='email' value={this.state.email} onChange={this.onFieldChange} />
          </fieldset>
          <fieldset>
            <label htmlFor='password'>Password:</label>
            <input id='email' type='password' name='password' value={this.state.password} onChange={this.onFieldChange} />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
