const validate = (input) => {
  return input.map((item) => {
    let lowercase = item.location.toLowerCase();
    let newLocation = lowercase[0].toUpperCase() + lowercase.substring(1);
    return {
      "location": newLocation
    }
  })
}

module.exports = validate;