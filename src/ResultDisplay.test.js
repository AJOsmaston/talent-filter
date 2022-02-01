import { mount } from '@cypress/react' 
import ResultDisplay from './components/ResultDisplay'

describe('Result Display Component', () => {
  it('Contains the text "This is the display area"', () => {
    mount(<ResultDisplay />)
    cy.get('[class="heading"]').should('contain', 'Enter a location to search available Talent')
  })

})