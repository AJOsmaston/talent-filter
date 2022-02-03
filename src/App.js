import SearchPage from "./components/SearchPage"
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [allTalent, setAllTalent] = useState();
  const sampleData = require('./data/exampleData')

  useEffect(() => {
    setAllTalent(sampleData)
  }, [sampleData])

  return (
    <SearchPage allTalent={allTalent} />
  );
}

export default App;
