import TalentFilter from "./TalentFilter"
import ResultDisplay from "./ResultDisplay"
import { useState, useEffect } from 'react'

function SearchPage({allTalent}) {

  const [text, setText] = useState();
  const [selectedTalent, setSelectedtalent] = useState();

  useEffect(() => {
    if (text) {
      setSelectedtalent(
        allTalent.filter(function(talent) {
          return talent.location.toLowerCase().includes(text.toLowerCase()) ? talent : null
        })
      )
    } else {
      setSelectedtalent(null)
    }
   
  }, [text, allTalent])


  return (
    <div className="homePage">
      <TalentFilter allTalent={allTalent} text={text} setText={setText} />
      <ResultDisplay selectedTalent={selectedTalent} />
    </div>
  )
}

export default SearchPage;
