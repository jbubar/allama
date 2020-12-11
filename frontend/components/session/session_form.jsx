import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  componentWillUnmount(){
      this.props.clearErrors()
  }
  handleChange(field){
    return (e) => {
        this.setState({[field]: e.currentTarget.value});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  renderErrors(){
    return (
        this.props.errors.session.length > 0 ? (
            <ul className="error-container">
                {
                    this.props.errors.session.map((error, i) => (
                        <li className="error-message" key={`error-${i}`}>
                            {error}
                        </li>
                    )) || null
                }
            </ul>
        ) : null
    )
  }
  renderSignUpFields(){
    if(this.props.formType != "Sign Up") return null;
    return(
        <React.Fragment>
            <label><p className="field-title">Full Name</p>
                <input 
                    type="text" 
                    value={this.state.full_name}
                    placeholder="Full Name"
                    onChange={this.handleChange("full_name")}
                />
            </label>
            <label><p className="field-title">Team ID</p>
                <input 
                    type="text" 
                    value={this.state.team_id}
                    onChange={this.handleChange("team_id")}
                    placeholder="Put a number between 1 and 10"
                />
            </label>
        </React.Fragment>
    )
  }
  handleDemoUser(e){
      e.preventDefault();
      const demoUser = {email: 'octavia@ebutler.com', password: '123456'}
      this.props.formType === "Log In" ? (
          this.props.action(demoUser) ) : ( this.props.login(demoUser))
  }
  linkToOtherSessionForm(){
      return (
        this.props.formType === "Log In" ? (
            <p className="have-account-text">Don't have an account? 
                <Link to='/signup'> Sign Up</Link>
            </p>
        ) : ( 
            <p className="have-account-text">Already have an account? 
                <Link to='/login'> Log In</Link>
            </p>
        )
      )
  }
  render(){
    return (
        <div className="session-page">
            <form onSubmit={this.handleSubmit} className="session-form">
                <h1 className="form-title">{ this.props.formType }</h1>
                {this.renderErrors()}
                <label><p className="field-title">Email Address</p>
                    <input 
                        type="text" 
                        value={this.state.email}
                        onChange={this.handleChange("email")}
                        placeholder="name@company.com"
                    />
                </label>
                { this.renderSignUpFields() }
                <label><p className="field-title">Password</p>
                    <input 
                        type="password" 
                        value={this.state.password}
                        placeholder="password"
                        onChange={this.handleChange("password")}
                    />
                </label>
                <input type="submit" className="submit-session-btn" value={ this.props.formType }/>
                <div className="btn-splash btn-nav demo-user-btn"onClick={this.handleDemoUser}>Log in as demo User</div>
                {this.linkToOtherSessionForm()}
                <Link className="exit" to='/'>Exit</Link>
            </form>
        </div>
    )
  }
}