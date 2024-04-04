import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  return (
    <div className="user">
      <h2>count : {count}</h2>
      <h2>Name : {props.name}</h2>
      <h2>location : pune - functional</h2>
      <h2>contact : omi26omi@gmail.com</h2>
    </div>
  );
};

export default User;
