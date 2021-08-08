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
                <br />
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
              <br/>
              <h3 className="change-form">{this.props.navLink}</h3>
              <br />
            <p class="align-left">Weedmaps respects privacy. Names and emails aren't displayed publicly, and nothing is posted to your Facebook or Google account without permission.</p>
              <div className="signup-banner">
                <br/>
                <h1 className="signup-banner-text">Why sign up?</h1>
                <br/>
                <img className="signup-img" src="./images/signup.jpg" />
                <ul class="align-left">
                  <li>Order online for delivery or pickup at your convenience.</li>
                  <li>Claim deals to save money on weed.</li>
                  <li>Get updates about your favorite products, brands, and retailers.</li>
                  <li>Leave reviews & share your experiences to help out the community.</li>
                </ul>
              </div>
            </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
