import './App.css';
import { useState } from 'react';

/* imagine the `users` data is coming from a database (doing a fetch request, getting data from the backend) */
import users from './data/users.js';
// console.log(users);

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [sortInput, setSortInput] = useState("");
  // Filter users
  // if the search input includes those 3 letters as you type, it will show up.
  // fix case-sensitive
  let filteredUsers = users.filter((user)=>{
    console.log(user.name)
    const lowerCaseName = user.name.toLowerCase();
    const lowerCaseSearchInput = searchInput.toLowerCase();
    return lowerCaseName.includes(lowerCaseSearchInput);
  })

  // by default, it shouldn't sort it.
  // when you choose the dropdown option, it should sort it.
  // we are sorting based on the sort input, using `name` every time.
  let preProcessing;
  if (sortInput){
    // want to create a new array where currency is a float. (not a decimal)
    // we are making currency a string every single time, and losing our `$` but now it's sorted.
    preProcessing = filteredUsers.map((user)=>{
      // let formattedCurrency = Number(String(user.currency).replace("$", ""));
      let formattedCurrency = Number(String(user.currency).replace("$", ""));
      user.currency = formattedCurrency;
      return user;
    })
    console.log(preProcessing);

    preProcessing.sort((a,b)=>{
      if (a[sortInput] < b[sortInput]) {
        return -1
      };
      if (a[sortInput] > b[sortInput]) {
        return 1
      };
      return 0;
    })
  } else {
    // if no `sortInput`, set preProcessing to the default values to ovrride it
    preProcessing = filteredUsers;
  }

  let renderUsers = preProcessing.map((user, index)=>{
    return <li key={index}>{user.name} - {user.currency}</li>
  });

  const handleSearchInput = (e) => {
    // console.log(e.target.value);
    setSearchInput(e.target.value);
  }

  const handleSortOnChange = (e) => {
    setSortInput(e.target.value);
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
        <select onChange={handleSortOnChange}>
          <option>--Sort--</option>
          <option value="name">Name</option>
          <option value="currency">Currency</option>
        </select>
      </div>
      <ul>{renderUsers}</ul>
    </div>
  );
}

export default App;
