import React from "react";

const UserList = ({ users }) => {
  return (
    <div style={{ backgroundColor: "#DFD8CA" }}>
      {users.map((el) => (
        <div style={{ color: "#1F1D36", padding: "30px" }}>
          my name is {el.name}
          and my username is {el.username}
          and I am from {el.address.city}
        </div>
      ))}
    </div>
  );
};

export default UserList;
