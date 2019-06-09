import React, { Component } from 'react'
import Home from './Home'
import axios from 'axios'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      input: '',
      error: false
    }
  }
  componentDidMount() {
    axios
      .get(`http://localhost:4300/users/abitgroggy`)
      .then(res => this.setState({ user: res.data }))
  }

  changeUser = event => {
    axios
      .get(`http://localhost:4300/users/${this.state.input}`)
      .then(res => {
        this.setState({ user: res.data })
      })
      .catch(err => this.setState({ error: true }))

    event.preventDefault()
  }

  handleChange = event => {
    this.setState({ input: event.target.value, error: false })
  }

  render() {
    return (
      <div>
        <Home
          user={this.state.user}
          error={this.state.error}
          changeUser={this.changeUser}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}
