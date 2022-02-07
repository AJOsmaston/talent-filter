const validateLocation = (input) => {
  return input.map((item) => {
    //make the whole string lowercase
    let lowercase = item["location"].toLowerCase();

    //split string via word, capitalise first letter, rejoin string
    let newLocation = lowercase.split(" ").map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    }).join(" ");

    //replace location with new location
    item["location"] = newLocation;

    //return object
    return item;
  })
}

module.exports = validateLocation;