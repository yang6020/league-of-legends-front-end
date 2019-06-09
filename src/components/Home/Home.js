import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Summoner Name: {this.props.user.name}</p>
          <p>Summoner Level: {this.props.user.summonerLevel}</p>
        </div>
        <form onSubmit={this.props.changeUser}>
          Search Summoner:
          <input type="text" name="user" onChange={this.props.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {this.props.error && <div>Summoner does not exist</div>}
      </div>
    )
  }
}
