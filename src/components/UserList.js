import React from 'react';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h3>List of Users:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>ID:</strong> {user.id}, <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
