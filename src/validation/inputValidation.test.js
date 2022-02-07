const validateLocation = require('./inputValidation')

describe('validation checks', () => {
  it('validates a single entry', () => {
    expect(validateLocation([
      {
        "location": "HOME"
      }
    ])).toEqual([
      {
        "location": "Home"
      }
    ])
  });

  it('validates multiple entries', () => {
    expect(validateLocation([
      {
        "location": "HOME"
      },
      {
        "location": "AwAy"
      }
    ])).toEqual([
      {
        "location": "Home"
      },
      {
        "location": "Away"
      }
    ])
  });

  it('selects location from a list of attributes', () => {
        expect(validateLocation([
      {
        "name": "ANTHONY",
        "location": "HOME",
        "something else!": "Another thing!"
      }
    ])).toEqual([
      {
         "name": "ANTHONY",
        "location": "Home",
        "something else!": "Another thing!"
      }
    ])
  });

  it('validates multiple word locations', () => {
    expect(validateLocation([
      {
        "location": "HOME aNd AwAy"
      }
    ])).toEqual([
      {
        "location": "Home And Away"
      }
    ])
  })
});