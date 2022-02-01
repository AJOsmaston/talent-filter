function TalentCard({talent}) {
  return (
  <div className="talentCard">
    <div className="talentName">{talent.name}</div>
    <div className="talentLoc">{talent.location}</div>
    <div className="talentDOB">{talent.date_of_birth}</div>
  </div>
  );
}

export default TalentCard;
