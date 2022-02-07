# Talent Filter - Contact tech test

## Setup

* Clone the repository `git clone https://github.com/AJOsmaston/talent-filter`
* Navigate to the directory `cd talent-filter`
* Install the dependencies `npm install`
* Run the app `npm start`

## Challenge Breakdown

I decided to tackle the problem using a React application, because I believe React is a great way of showing a visually responsive application to filter out a list of proposed talent. I styled it similarly to the way Contact styles their list on their website, and tried to make it as responsive to screen-sizes as possible, with a minimalistic css approach.

I started off using cypress in order to component test, but it being my first time trying things out with cypress, I couldn't get it to work the way I wanted. In the end I went with the Jest library that is bundled with react (run the tests via the script `npm run test`), and given more time I would test the components in isolation using jest as well (or cypress if I can get my head around how to mock props).

## The specification

#### Is the program easy to follow?
I have laid out the project folder using descriptively named subfolders, I have taken care to name variables to be as useful as possible, and I have tried to comment when I believe that things could do with a little more explaining. Plus I have detailed setup installation and futher details in this README.
#### How well does the program handle malformed data?
At the moment, I have added an input Validation for location only - however this could be expanded with any field in the input JSON that needs validating. I have also included a small case check in the search bar.
#### Are there automated tests?
In this current version, the only tests that exist are on the validation module. I would love to expand this in the future to include component tests that test each of the React Components in Isolation.
#### Is the code well documented?
I hope that this README and the notes I have made throughout fulfil this criteria.

## Future ideas

* Add component tests (can I mention this more?)
* Expand the malformed data filter to include a list of recognised options, instead of just case checking
* Redo the CSS or add some styling from a CSS library such as boostrap or materialUI.


