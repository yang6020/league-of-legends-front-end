import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    console.log(this.props.user)
    return (
      <div>
        <p>{this.props.user.name}</p>
      </div>
    )
  }
}
