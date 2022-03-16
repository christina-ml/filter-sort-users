import './App.css';
import { useState } from 'react';

/* imagine the `users` data is coming from a database (doing a fetch request, getting data from the backend) */
import users from './data/users.js';
// console.log(users);

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  let renderUsers = users.map((user, index)=>{
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
        <label htmlFor='search-name'>Search Name</label>
        <input 
          onChange={handleSearchInput}
          value={searchInput}
        />
      </div>
      <ul>{renderUsers}</ul>
    </div>
  );
}

export default App;
