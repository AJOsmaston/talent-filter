import { mount } from '@cypress/react' 
import TalentFilter from './components/TalentFilter'

describe('Talent Filter Component', () => {
  it('Contains the text "Location"', () => {
    mount(<TalentFilter />)
    cy.get('[class="heading"]').should('contain', 'Location')
  })

  it('Contains an input field that is enabled', () => {
    mount(<TalentFilter />)
    cy.get('input').should('be.enabled')
  })
})