const validate = require('./inputValidation')

describe('validation checks', () => {
  it('validates a single entry', () => {
    expect(validate([
      {
        "location": "HOME"
      }
    ])).toEqual([
      {
        "location": "Home"
      }
    ])
  })

  it('validates multiple entries', () => {
    expect(validate([
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
  })
});