# HCard Generator

hCard is a simple, open format for publishing people, companies, organizations on the web, using a 1:1 representation of vCard (RFC2426) properties and values in HTML. hCard is one of several open microformat standards suitable for embedding data in HTML/HTML5, and Atom/RSS/XHTML or other XML. 

## Output from generator

```
<div xmlns="http://www.w3.org/1999/xhtml" id="vcard" class="sc-fznKkj fQkkzS vcard">
   <div class="sc-fzqNJr hXQgjp hcard-header">
      <div class="sc-fznZeY gJlwEu">
         <span class="sc-fzokOt jBUges row-label"></span>
         <div class="sc-fzqBZW eNQuho row-body"><span class="fn">Anmol Desai</span></div>
      </div>
      <div class="sc-fzoyAV fQsatj avatar-wrapper"><img src="/static/media/avatar.ccfd6694.png" alt="avatar" class="sc-fzoLag BNtsP photo" /></div>
   </div>
   <div class="sc-fzoXzr jYxGEJ hcard-body">
      <div class="sc-fznZeY gJlwEu">
         <span class="sc-fzokOt gcdrkW row-label">Email</span>
         <div class="sc-fzqBZW eNQuho row-body"><a class="sc-fzoNJl loPePV email" href="mailto: anmoldesai4@gmail.com">anmoldesai4@gmail.com</a></div>
      </div>
      <div class="sc-fznZeY gJlwEu">
         <span class="sc-fzokOt gcdrkW row-label">Phone</span>
         <div class="sc-fzqBZW eNQuho row-body"><span class="tel">0451044429</span></div>
      </div>
      <div class="sc-fzpjYC gJohPa adr">
         <div class="sc-fznJRM bTIjTR locality-region-wrapper">
            <div class="sc-fznZeY gJlwEu">
               <span class="sc-fzokOt gcdrkW row-label">Address</span>
               <div class="sc-fzqBZW eNQuho row-body"><span class="sc-fzqARJ eLpUJW street-address">31 carinya st, blacktown 204</span></div>
            </div>
            <div class="sc-fznZeY gJlwEu">
               <span class="sc-fzokOt jBUges row-label"></span>
               <div class="sc-fzqBZW eNQuho row-body"><span class="sc-fzqNqU kikdAh locality">Sydney</span>, <span class="sc-fzoyTs jZUSDr region">New South Wales</span></div>
            </div>
         </div>
         <div class="sc-fznxsB cUWXFh country-code-wrapper">
            <div class="sc-fznZeY gJlwEu">
               <span class="sc-fzokOt gcdrkW row-label">Postcode</span>
               <div class="sc-fzqBZW eNQuho row-body"><span class="sc-fznWqX dAkvW postal-code">2148</span></div>
            </div>
            <div class="sc-fznZeY gJlwEu">
               <span class="sc-fzokOt gcdrkW row-label">Country</span>
               <div class="sc-fzqBZW eNQuho row-body"><span class="sc-fzoiQi ozSmQ country-name">Australia</span></div>
            </div>
         </div>
      </div>
   </div>
</div>
```

## Aim

The aim of this project was to allow a user to enter their details in the form on the left and have the hcard preview shown on the right.

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

- index.js ( Contains all logic required for the component or feature)
- index.style.js ( Contains all css in js components that are used)
- index.test.js ( Cotains all tests related to the item mention in index.js)


## Colour Picker

Due to not having photoshop the colour was picked by uploading the png given to https://imagecolorpicker.com/en/ and retrieving the colour.