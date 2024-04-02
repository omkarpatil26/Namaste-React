import { useState } from "react";

const User = (name) => {
    const[count] = useState(0);
    const[count2] = useState(2);
  return (
    <div className="user">
        <h2>count : {count}</h2>
        <h2>count2 : {count2}</h2>
      <h2>Name : {name}</h2>
      <h2>location : pune - functional</h2>
      <h2>contact : omi26omi@gmail.com</h2>
    </div>
  );
};

export default User;
