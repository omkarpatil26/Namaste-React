import User from "../components/User";
import UserClass from "../components/UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About us works</h1>
        {/* <User name={"Omi Patil(functionalcompnent)"} /> */}
        <UserClass
          name={"Omi Patil(class based)"}
          location={"delhi(class based)"}
        />
      </div>
    );
  }
}

export default About;
