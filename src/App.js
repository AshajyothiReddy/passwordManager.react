import {Component} from 'react'
import './App.css'

const PasswordItem = props => {
  const {website, username, id, onDlete} = props

  const onDeletePassword = () => {
    onDlete(id)
  }
  return (
    <li className="password-list-item">
      <div>
        <p>{website}</p>
        <p>{username}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
          className="stars-img"
        />
      </div>
      <button
        data-testid="delete"
        type="button"
        onClick={onDeletePassword}
        className="delete-img"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

class App extends Component {
  state = {
    showPasswords: false,
    website: '',
    username: '',
    password: '',
    count: 0,
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  renderNoPasswords = () => (
    <div className="no-passwords-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        className="no-password-img"
        alt="no passwords"
      />
      <p className="heading">No Passwords</p>
    </div>
  )

  onSubmitForm = event => {
    event.preventDefault()
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count, username, website, password} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="logo"
          alt="app logo"
        />
        <div className="add-password-container">
          <div className="add-new-pwd-container">
            <h1 className="heading">Add New Password</h1>
            <form onSubmit={this.onSubmitForm}>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="input-logo-img"
                  alt="website"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  value={website}
                  className="input-text-container"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="input-logo-img"
                  alt="username"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  className="input-text-container"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="input-logo-img"
                  alt="password"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  className="input-text-container"
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="password-manager-container">
          <div className="header">
            <div className="heading-password-img-container">
              <h1 className="heading">Your Passwords</h1>
              <p>{count}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="input-logo-img"
                alt="search"
              />
              <input
                type="search"
                placeholder="Search"
                className="input-text-container"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-container">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Show Passwords</label>
          </div>
          {count !== 0 ? (
            <ul>
              <PasswordItem website={website} username={username} />
            </ul>
          ) : (
            this.renderNoPasswords()
          )}
        </div>
      </div>
    )
  }
}

export default App
