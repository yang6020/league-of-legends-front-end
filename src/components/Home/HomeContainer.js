import React, { Component } from 'react'
import Home from './Home'
import axios from 'axios'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      input: ''
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
      .then(res => this.setState({ user: res.data }))
    event.preventDefault()
  }

  handleChange = event => {
    this.setState({ input: event.target.value })
  }

  render() {
    return (
      <div>
        <Home
          user={this.state.user}
          changeUser={this.changeUser}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}
