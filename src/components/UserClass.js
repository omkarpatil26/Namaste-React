import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // console.log("child constructor");
    super(props);

    this.state = {
      userInfo: {
        name: "dummyName",
        location: "dummyLocation",
        avatarURL: "https:dummyUrl",
      },
    };
    //console.log(props);
  }

  async componentDidMount() {
    //  console.log("child component did mount");
    const data = await fetch("https://api.github.com/users/omkarpatil26");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    //  const { name, location } = this.props;
    // const { count } = this.state;
    // console.log("child render ");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user">
        {/* <h2>count : {count}</h2> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        > */}
        {/* Click me!
        </button> */}
        <img src={avatar_url}></img>
        <h3>Name : {name}</h3>
        <h3>location : {location}</h3>
        <h3>contact : omi26omi@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
