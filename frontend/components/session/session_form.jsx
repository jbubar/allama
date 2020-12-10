import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field){
    return (e) => {
        this.setState({[field]: e.currentTarget.value});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    return this.props.action(this.state);
  }

  renderSignUpFields(){
    if(this.props.formType != "Sign Up") return null;
    return(
        <React.Fragment>
            <label>Full Name: 
                <input 
                    type="text" 
                    value={this.state.full_name}
                    onChange={this.handleChange("full_name")}
                />
            </label>
            <label>Team ID:
                <input 
                    type="text" 
                    value={this.state.team_id}
                    onChange={this.handleChange("team_id")}
                />
            </label>
        </React.Fragment>
    )
  }
  render(){
    return (
        <form onSubmit={this.handleSubmit}>
            <h1>{ this.props.formType }</h1>
            <label>Email: 
                <input 
                    type="text" 
                    value={this.state.email}
                    onChange={this.handleChange("email")}
                />
            </label>
            { this.renderSignUpFields() }
            <label>Password:
                <input 
                    type="password" 
                    value={this.state.password}
                    onChange={this.handleChange("password")}
                />
            </label>
            <input type="submit" value={ this.props.formType }/>
        </form>
    )
  }
}