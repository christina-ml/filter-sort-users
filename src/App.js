import './App.css';
import { useState } from 'react';

/* imagine the `users` data is coming from a database (doing a fetch request, getting data from the backend) */
import users from './data/users.js';
// console.log(users);

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  // Filter users
  // if the search input includes those 3 letters as you type, it will show up.
  // fix case-sensitive
  let filteredUsers = users.filter((user)=>{
    console.log(user.name)
    const lowerCaseName = user.name.toLowerCase();
    const lowerCaseSearchInput = searchInput.toLowerCase();
    return lowerCaseName.includes(lowerCaseSearchInput);
  })

  let renderUsers = filteredUsers.map((user, index)=>{
    return <li key={index}>{user.name}</li>
  });

  const handleSearchInput = (e) => {
    console.log(e.target.value)
    setSearchInput(e.target.value)
  }

  return (
    <div>
      <h1>Users Filter Sort</h1>
      <div>
        <label htmlFor='search_input'>Search Name: </label>
        <input 
          id="search_input"
          type="text"
          value={searchInput}
          onChange={handleSearchInput}
        />
        <label>Sort</label>
        <select>
          <option>--Sort--</option>
          <option>Name</option>
          <option>Currency</option>
        </select>
      </div>
      <ul>{renderUsers}</ul>
    </div>
  );
}

export default App;
