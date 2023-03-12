import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class StudentLoginPage extends Component {
  state = {
    userName: '',
    userPassword: '',
    errorMsg: false,
    showPassword: false,
    newUser: false,
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({userPassword: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {userName, userPassword} = this.state
    const parsedData = localStorage.getItem('studentDetails')
    const studentDetails = JSON.parse(parsedData)
    console.log(studentDetails)
    if (studentDetails.length === 0) {
      this.setState({newUser: true})
    } else {
      this.setState({newUser: false})
      const {name, password} = studentDetails[0]
      if (name === userName && password === userPassword) {
        const {history} = this.props
        this.setState({errorMsg: false})
        history.replace('/student/paper')
      } else {
        this.setState({errorMsg: true})
      }
    }
  }

  render() {
    const {userName, password, errorMsg, showPassword, newUser} = this.state
    const passwordType = showPassword ? 'text' : 'password'

    return (
      <div className="main-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <h1 className="heading">Student Login</h1>
          <label className="label" htmlFor="name">
            NAME
          </label>
          <input
            className="input"
            id="name"
            type="text"
            placeholder="Name"
            onChange={this.onChangeUserName}
            value={userName}
          />
          <label className="label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="input"
            id="password"
            type={passwordType}
            placeholder="Password"
            onChange={this.onChangePassword}
            value={password}
          />
          <div className="checkbox-container">
            <input
              id="checkbox"
              type="checkbox"
              className="checkbox"
              onChange={this.onChangeCheckbox}
            />
            <label className="checkbox-label" htmlFor="checkbox">
              Show Password
            </label>
          </div>
          {errorMsg && <p className="error-msg">*Invalid User Details</p>}
          <button className="button" type="submit">
            Login
          </button>
          {newUser && (
            <p className="error-msg">
              The User Seems to be new! Please Sign up
            </p>
          )}
          <div className="signup-container">
            <p className="new-here">New Here?</p>
            <Link to="signup">
              <p className="signup">SignUp</p>
            </Link>
          </div>
        </form>
      </div>
    )
  }
}
export default StudentLoginPage
