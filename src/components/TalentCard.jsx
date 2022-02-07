function TalentCard({talent}) {

  // simple talent card with name and location. Can be updated later to include photo, include date of birth, etc. 
  // Date of birth has been added commented to show how it would be included.
  return (
  <div className="talentCard">
    <div className="talentName">{talent.name}</div>
    <div className="talentLoc">{talent.location}</div>
    {/* <div className="talentDOB">{talent.date_of_birth}</div> */}
  </div>
  );
}

export default TalentCard;
