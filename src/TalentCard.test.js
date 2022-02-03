import { mount } from '@cypress/react';
import TalentCard from './components/TalentCard';

describe('Talent Card Component', () => {

  it('contains a passed down name', () => {
    mount(<TalentCard talent={{"name": "Anthony"}} />)
    cy.get('[class="talentName"]').should('contain', 'Anthony');
  });

   it('contains a passed down location', () => {
    mount(<TalentCard talent={{"location": "At Home"}} />);
    cy.get('[class="talentLoc"]').should('contain', 'At Home');
  });

     it('contains a passed down date of birth', () => {
    mount(<TalentCard talent={{"date_of_birth": "1984-07-11"}} />);
    cy.get('[class="talentDOB"]').should('contain', '1984-07-11');
  });
});