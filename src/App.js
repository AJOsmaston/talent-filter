import SearchPage from "./components/SearchPage"
import './App.css';
import { useEffect, useState } from 'react'
import validateLocation from './validation/inputValidation'

function App() {

  const [allTalent, setAllTalent] = useState();
  const sampleData = require('./data/exampleData')

  // sampleData can be replaced with a fetch here, or moved to context
  useEffect(() => {
    setAllTalent(
      validateLocation(sampleData)
    )
  }, [sampleData])

  return (
    <SearchPage allTalent={allTalent} />
  );
}

export default App;
