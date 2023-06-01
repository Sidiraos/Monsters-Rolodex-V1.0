import logo from './logo.svg';
import './App.css';
import CardList from './components/cardList component/CardList';
import SearchBox from './components/searchBox component/SearchBox';

import {useEffect, useState} from 'react'


function App() {
  console.log("render")
  const [searchField , setSearchField] = useState('') ;
  const [monsters , setMonsters] = useState([]) ;
  const [filteredMonsters , setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
    .then((monsters) => setMonsters(monsters));
  } , []);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});
    setFilteredMonsters(newFilteredMonsters);
  } , [monsters , searchField]);

  const onSearchChange = (event) => {
    const seachFieldString = event.target.value.toLowerCase();
    console.log(seachFieldString);
    setSearchField(seachFieldString);
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onSearchHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );

}

export default App;
