import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  guestLogin(e) {
    e.preventDefault();
    const guest = { username: "guest", email: "guest@email.com", password: "password" };
    this.props.guestLogin(guest);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="main">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1 className="form-text">{this.props.formType}</h1> 
          <br />
              {this.renderErrors()}
            <div className="login-form">
              <br />
              <div className="signup-field-container">
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input" placeholder="Username"
                />
                <br />
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input" placeholder="Email"
                />
                <br />
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input" placeholder="Password"
                />
                <br />
                <input className="session-submit" type="submit" value={this.props.formType} />
                <button className="session-submit2" onClick={this.guestLogin}>Log in as Guest</button>
              </div>
              <h3 className="change-form">{this.props.navLink}</h3>
              <br />
            <p className="align-left">Hashmaps respects privacy. Names and emails aren't displayed publicly, and nothing is posted without permission. We will <u>never</u> rat you out to the Feds. Snitches get stiches.</p>
              <div className="signup-banner">
                <br/>
                <h1 className="signup-banner-text">Why sign up?</h1>
                <img className="signup-img" src="./images/signup.jpg" />
                <ul className="signup-list">
                  <li>Order online for delivery or pickup at your convenience.</li>
                  <li>Claim deals to save money on weed.</li>
                  <li>Get updates about your favorite products, brands, and retailers.</li>
                  <li>Help out the community by promoting responsible consumption.</li>
                </ul>
              </div>
            </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
