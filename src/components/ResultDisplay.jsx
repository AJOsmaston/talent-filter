import TalentCard from "./TalentCard"
import { useEffect, useState } from 'react'

function ResultDisplay( {allTalent} ) {

  
  if (!allTalent) {
    return <div className="heading">Enter a location to search available Talent</div> 
  }
  
  return allTalent && (
    <div className="display">
      {allTalent.map(talent => (
        <TalentCard 
          key={`${talent.date_of_birth}.${talent.name}`} 
          talent={talent}
        />
      ))}
    </div> 
  )
}


export default ResultDisplay;
