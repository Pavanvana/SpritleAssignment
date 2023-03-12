import {Component} from 'react'

import './index.css'

class MasterSignup extends Component {
  state = {
    name: '',
    password: '',
    signupStatus: false,
    loginUserDetails: [],
  }

  onChangeUserName = event => {
    this.setState({name: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {name, password, loginUserDetails} = this.state
    const masterDetails = {
      name,
      password,
    }
    localStorage.setItem(
      'masterDetails',
      JSON.stringify([...loginUserDetails, masterDetails]),
    )
    this.setState({signupStatus: true})
  }

  render() {
    const {signupStatus} = this.state
    return (
      <div className="main-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <h1 className="heading">Master Registration</h1>
          <label className="label" htmlFor="name">
            NAME
          </label>
          <input
            className="input"
            id="name"
            type="text"
            placeholder="Name"
            onChange={this.onChangeUserName}
          />
          <label className="label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="input"
            id="password"
            type="password"
            placeholder="Password"
            onChange={this.onChangePassword}
          />
          <label className="label" htmlFor="password">
            RE-ENTER PASSWORD
          </label>
          <input
            className="input"
            id="password"
            type="password"
            placeholder="Password"
            onChange={this.onChangePassword}
          />
          {signupStatus && <p className="error-msg">Sign Up Successfully</p>}
          <button className="signup-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}
export default MasterSignup
