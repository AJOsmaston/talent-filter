function TalentFilter({ text, setText}) {

  // to update the state dynamically when typing
  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="filter">
      <div className="heading">Location</div>
      <input 
        type="text"
        onChange={handleTextChange}
        placeholder='Please enter a location'
        value={text}
      />
    </div>
  )
}

export default TalentFilter;
