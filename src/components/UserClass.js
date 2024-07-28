import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummyName",
        location: "dummyLocation",
        avatarURL: "https:dummyUrl",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/omkarpatil26");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user">
        <img src={avatar_url}></img>
        <h3>Name : {name}</h3>
        <h3>location : {location}</h3>
        <h3>contact : omi26omi@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
