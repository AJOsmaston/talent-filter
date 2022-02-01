import TalentCard from "./TalentCard"

function ResultDisplay() {

  const talent = {
    "name": "Anthony",
    "location": "At Home",
    "date_of_birth": "1984-07-11"
  }
  
  return (
    <div className="display">
      <div className="heading">Enter a location to search available Talent</div>
      <TalentCard talent={talent}/>
    </div>
  )
}


export default ResultDisplay;
