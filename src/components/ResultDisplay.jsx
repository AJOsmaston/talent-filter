import TalentCard from "./TalentCard"

function ResultDisplay( {selectedTalent} ) {
  
  // displays message if nothing in input box
  if (!selectedTalent) {
    return (
      <div className="display">
        <div className="heading">Enter a location to search available Talent</div>
      </div>
    )
  }
  
  // renders individual talent cards for each selected Talent
  return selectedTalent && (
    <div className="display">
      {selectedTalent.map(talent => (
        <TalentCard 
          key={`${talent.date_of_birth}.${talent.name}`} 
          talent={talent}
        />
      ))}
    </div> 
  )
}


export default ResultDisplay;
