import TalentFilter from "./TalentFilter"
import ResultDisplay from "./ResultDisplay"
import { useState, useEffect } from 'react'

function SearchPage({allTalent}) {

  const [text, setText] = useState({value: ""});
  const [selectedTalent, setSelectedtalent] = useState([]);

  // this use effect checks to see whether a selection has been made, and filters the talent pool to match the selection
  useEffect(() => {
    if (text.value) {
      setSelectedtalent(
        allTalent.filter(function(talent) {
          // includes toLowerCase to make the search case insensitve
          return talent.location.toLowerCase().includes(text.value.toLowerCase()) ? talent : null
        })
      )
    } else {
      setSelectedtalent([])
    }
   //text and allTalent are given as dependencies so that the filter is run again if either of these change
  }, [text, allTalent])


  return (
    <div className="homePage">
      <TalentFilter text={text} setText={setText} />
      <ResultDisplay selectedTalent={selectedTalent} />
    </div>
  )
}

export default SearchPage;
