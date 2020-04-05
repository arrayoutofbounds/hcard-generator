# HCard Generator

HCard is a simple, open format for publishing people, companies, organizations on the web, using a 1:1 representation of vCard (RFC2426) properties and values in HTML. HCard is one of several open microformat standards suitable for embedding data in HTML/HTML5, and Atom/RSS/XHTML or other XML. 

## Go to live demo

Click [here](http://hcard-env.eba-4urj4zfb.ap-southeast-2.elasticbeanstalk.com/) to view.

## How to download and use locally

1. Download repository
2. Run yarn install
3. Run yarn start
4. Go to localhost:3000

## Aim

The aim of this project was to build a responsive HCard Generator that allows a user to enter their details in the form on the left and have the HCard preview shown on the right.

## Output from generator

The class vcard is a root class name that indicates the presence of an HCard. 

The classes photo, fn, and adr define properties of the HCard. 

```
<div xmlns="http://www.w3.org/1999/xhtml" id="vcard" class="sc-fznKkj fQkkzS vcard">
   <div class="sc-fzqNJr hXQgjp hcard-header">
      <div class="sc-fznZeY gJlwEu">
         <span class="sc-fzokOt jBUges row-label"></span>
         <div class="sc-fzqBZW eNQuho row-body"><span class="fn">Test user</span></div>
      </div>
      <div class="sc-fzoyAV fQsatj avatar-wrapper"><img src="/static/media/avatar.ccfd6694.png" alt="avatar" class="sc-fzoLag BNtsP photo" /></div>
   </div>
   <div class="sc-fzoXzr jYxGEJ hcard-body">
      <div class="sc-fznZeY gJlwEu">
         <span class="sc-fzokOt gcdrkW row-label">Email</span>
         <div class="sc-fzqBZW eNQuho row-body"><a class="sc-fzoNJl loPePV email" href="mailto: test@mail.com">test@mail.com</a></div>
      </div>
      <div class="sc-fznZeY gJlwEu">
         <span class="sc-fzokOt gcdrkW row-label">Phone</span>
         <div class="sc-fzqBZW eNQuho row-body"><span class="tel">01451033312</span></div>
      </div>
      <div class="sc-fzpjYC gJohPa adr">
         <div class="sc-fznJRM bTIjTR locality-region-wrapper">
            <div class="sc-fznZeY gJlwEu">
               <span class="sc-fzokOt gcdrkW row-label">Address</span>
               <div class="sc-fzqBZW eNQuho row-body"><span class="sc-fzqARJ eLpUJW street-address">1 magical ave</span></div>
            </div>
            <div class="sc-fznZeY gJlwEu">
               <span class="sc-fzokOt jBUges row-label"></span>
               <div class="sc-fzqBZW eNQuho row-body"><span class="sc-fzqNqU kikdAh locality">narnia</span>, <span class="sc-fzoyTs jZUSDr region">hogwarts</span></div>
            </div>
         </div>
         <div class="sc-fznxsB cUWXFh country-code-wrapper">
            <div class="sc-fznZeY gJlwEu">
               <span class="sc-fzokOt gcdrkW row-label">Postcode</span>
               <div class="sc-fzqBZW eNQuho row-body"><span class="sc-fznWqX dAkvW postal-code">1800</span></div>
            </div>
            <div class="sc-fznZeY gJlwEu">
               <span class="sc-fzokOt gcdrkW row-label">Country</span>
               <div class="sc-fzqBZW eNQuho row-body"><span class="sc-fzoiQi ozSmQ country-name">Greenland</span></div>
            </div>
         </div>
      </div>
   </div>
</div>
```

## Technology

This app is made by using React 16.13.1

## Dependencies Installed

### Enzyme

Enzyme was used for unit testing the React components due to its simplicity of use.

### Styled Components

Css in JS is a very interesting and has a lot of benefits. They make the styles more reusable, portable and allow dynamic funtionality. For these reasons, this library was chosen.

### Jest Styled Components

This library adds to the set of matchers provided by jest and allows for css testing of components. This is very useful when testing the logic based css in the styled components.

## Folder Structure

- public
- src
    - assets
    - components
        - Button
        - EmailLink
        - Form
        - Inpur
        - Label
        - Section
        - Title
    - containers
        - App
        - DetailsForm
        - HCard
            - components
        - Wrapper
    - utils
    - index.css
    - index.js
    - serviveWorker.js
    - setupTests.js
- .gitignore
- Dockerfile
- Dockerfile.dev
- package.json
- yarn.lock


This folder structure was chosen based on features as mentioned  at https://reactjs.org/docs/faq-structure.html.

The assets folder holds all the assets needed to build the website.

The components directory in src folder contains reusable React components which can be used to construt any page. The components are not stateful and are meant to be highly reusable.

The containers director represents the main items that make up the page. These can be ( and are ) stateful unlike the components mentioned above. These are complex one off pages and are not design with a high resusbility in mind.

HCard container has a set of components within it. This decisions was made to ensure that the code for the Hcard is readable/simple and all related items for the Hcard stay in one place. THe Hcard preview component can be quite confusing to construct in a one.


## Structure of all features

This structure was chosen to ensure that all related files stay in close proximity. Hence, all files related to a specific component/container can be found in just a single folder.

- index.js ( Contains all logic required for the component or feature)
- index.style.js ( Contains all css in js components that are used in index.js)
- index.test.js ( Contains all tests related to the component mention in index.js)


## Tests

Unit tests were created using Enzyme and run using jest.

Snapshots tests were done on the:

- App
- Form ( left side )
- HCard Preview ( right side )

Test Coverage was found by running `yarn test --coverage --watchAll=false`

### Test coverage results

![Test Results](/src/assets/images/test-results.png)

![Information](/src/assets/images/tests-time-info.png)


## Reusability

The code was ensure to be reusable by seperating components that can be used independently of the logic of the app. This ensures that if the scope of the application decided to grow, the same components could be used.

Styled components also ensured that the code was highly reusable and adaptable to any changes in logic. Various components can be changed with minor effor to suit any UI requirement changes.

A utils folder was created to allow independent code to be accessed easily. Constants and helpers are accessible by the entire application and affect it greatly. To ensure that changes only need to be made in one place, all utility functions and constants were put in the utils folder.


## Colour Picker

Due to not having photoshop the colour was picked by uploading the png given to https://imagecolorpicker.com/en/ and retrieving the colour.

## Testing the result

To ensure the hcard was following conventions, the output of the download was tested on http://hcard.geekhood.net by pasting it under the `Fragment` section.

Note: For the test to pass all fields must be filled out. This is something that can be improved.

## CI

To ensure continous integration, Github was used.

## CD

Continous Deployment was setup by using Travis CI and ElasticBeanstalk. Every time the code was pushed, tests were ran and a docker image was built. The docker image is then pushed to dockerhub and then downloaded by the Elasticbeanstalk instance and executed.

## To Do

- Improve styled-components to show more readable class names.
- Add integration tests
- Allow removal of fields in the final generated result when no value is entered.