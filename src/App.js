import SearchPage from "./components/SearchPage"
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [allTalent, setAllTalent] = useState();
  const sampleData = require('./data/exampleData')

  // sampleData can be replaced with a fetch here, or moved to context
  useEffect(() => {
    setAllTalent(sampleData)
  }, [sampleData])

  return (
    <SearchPage allTalent={allTalent} />
  );
}

export default App;
