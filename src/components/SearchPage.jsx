import TalentFilter from "./TalentFilter"
import ResultDisplay from "./ResultDisplay"
import { useEffect, useState } from 'react'

function SearchPage() {

  const [allTalent, setAllTalent] = useState();
  const sampleData = require('../data/exampleData')

  useEffect(() => {
    setAllTalent(sampleData)
  }, [sampleData])

  return (
    <div className="homePage">
      <TalentFilter />
      <ResultDisplay allTalent={allTalent} />
    </div>
  )
}

export default SearchPage;
