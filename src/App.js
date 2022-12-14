import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUserList] = useState([]);
  
  const addUserHandler = (username, userAge) =>{
    setUserList((prevUsersList) => {
      return [...prevUsersList, {name: username, age: userAge, id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
