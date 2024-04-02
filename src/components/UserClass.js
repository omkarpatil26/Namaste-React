import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(props);
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user">
        <h2>count : {count}</h2>
        <h2>count2 : {count2}</h2>
        <h2>Name : Omi</h2>
        <h2>location : pune</h2>
        <h2>contact : omi26omi@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
