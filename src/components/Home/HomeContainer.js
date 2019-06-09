import React, { Component } from 'react'
import Home from './Home'
import axios from 'axios'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    axios
      .get(`http://localhost:4300/users/abitgroggy`)
      .then(res => this.setState({ user: res.data }))
  }

  render() {
    return (
      <div>
        <Home user={this.state.user} />
      </div>
    )
  }
}
