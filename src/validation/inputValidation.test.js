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
});