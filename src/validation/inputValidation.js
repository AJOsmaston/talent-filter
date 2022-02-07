const validateLocation = (input) => {
  return input.map((item) => {
    let lowercase = item["location"].toLowerCase();
    let newLocation = lowercase[0].toUpperCase() + lowercase.substring(1);
    item["location"] = newLocation
    return item;
  })
}

module.exports = validateLocation;