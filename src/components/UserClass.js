import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("child constructor");
    super(props);

    this.state = {
      count: 0,
    };
    //console.log(props);
  }

  componentDidMount() {
    console.log("child component did mount");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log("child render ");
    return (
      <div className="user">
        <h2>count : {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click me!
        </button>
        <h3>Name : Omi</h3>
        <h3>location : pune</h3>
        <h3>contact : omi26omi@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
