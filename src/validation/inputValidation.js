const validateLocation = (input) => {
  return input.map((item) => {
    let lowercase = item["Location"].toLowerCase();
    let newLocation = lowercase[0].toUpperCase() + lowercase.substring(1);
    item["Location"] = newLocation
    return item;
  })
}

module.exports = validateLocation;