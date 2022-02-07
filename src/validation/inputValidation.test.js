const validateLocation = require('./inputValidation')

describe('validation checks', () => {
  it('validates a single entry', () => {
    expect(validateLocation([
      {
        "Location": "HOME"
      }
    ])).toEqual([
      {
        "Location": "Home"
      }
    ])
  })

  it('validates multiple entries', () => {
    expect(validateLocation([
      {
        "Location": "HOME"
      },
      {
        "Location": "AwAy"
      }
    ])).toEqual([
      {
        "Location": "Home"
      },
      {
        "Location": "Away"
      }
    ])
  })

  it('selects location from a list of attributes', () => {
        expect(validateLocation([
      {
        "Name": "ANTHONY",
        "Location": "HOME",
        "Something else!": "Another thing!"
      }
    ])).toEqual([
      {
         "Name": "ANTHONY",
        "Location": "Home",
        "Something else!": "Another thing!"
      }
    ])
  })
});