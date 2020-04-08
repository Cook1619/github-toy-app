import React, { Component } from "react";

export class Card extends Component {
  render() {
      const profile = this.props
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt="blank img" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
