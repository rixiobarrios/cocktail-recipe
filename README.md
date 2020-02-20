<img width="746" src="https://user-images.githubusercontent.com/55994508/73614396-38f97300-45c4-11ea-96f6-1c68497dbe56.png" alt="logo" style="display: block; margin: 0 auto" />

# Project #2: Elixir: Drink Recipes Version 1.0

## Definition

**Elixir** is a clear, sweet-flavored liquid used for medical purposes, to be taken orally and intended to cure one's illness.When used as a pharmaceutical preparation, an elixir contains at least one active ingredient designed to be taken orally.(_source: Wikipedia_)

**Recipes** are sets of instructions that describes how to prepare or make something, especially a dish of prepared food.
The term recipe is also used in medicine or in information technology (_e.g., user acceptance_). A doctor will usually begin a prescription with recipe, Latin for take, usually abbreviated as Rx or the equivalent symbol (℞).(_source: Wikipedia_)

**Mixology** is another term for a bartender or bar chef. However, mixology is generally accepted as a refined and in-depth study of the art and craft of mixing drinks. Think of it as the study of the chemistry of drinks, and the mixologist as the professional who studies and practices that.(_source: The Spruce Eats_)

## Link to the Application

[Elixir: Drink Recipes](http://cocktail-recipe-app.herokuapp.com/)

## Link to Article on Linkedin

[Elixir: The Second Project](https://www.linkedin.com/posts/activity-6628685336316903424-0H-t)

## Application Preview

<img width="746" alt="" src="https://user-images.githubusercontent.com/55994508/73427505-880d8280-42fc-11ea-945f-98f74975c8c2.gif">

## Target Audience

Anyone legally old enough to drink legally in their country of residence. Amateur Mixologist and bartenders alike. Drink enthusiast and lovers of relaxation and leisure.

## Why I chose this Application

Drinking is a social, recreational and relaxing activity. Most humans on this planet have a relationship with alcohol. I decided to make this application as a tribute to the ritual of alcohol, the different types there are and how we mix it into incredible combinations all around the world. One could say alcohol unites us as a specie. You'll find this application educational, fun and exciting. So have a drink on me!

I made this game as part of my second project assignment for **General Assembly** coding bootcamp.

## History

Purposeful production of alcoholic drinks is common and often reflects cultural and religious peculiarities as much as geographical and sociological conditions. Discovery of late Stone Age jugs suggest that intentionally fermented beverages existed at least as early as the Neolithic period (_c. 10000 BC_).(_source: Wikipedia_)

## The Application

**Elixir: Drink Recipes** is a catalog of mixed drinks from all over the world. The API used in this app is populated by all users that are part of this open project.

## Instructions

Upon entry, you are presented with featured drink choices. You can pick one of them or use the search bar to find the drink of your choice based on a few criteria. Once you have chosen your drink, you are shown ingredients and instructions in how to prepare the given drink.

## Hardware Platform

This is _web-based_ application for use on a desktop and laptop computers. _Mobile_ option for phones and tablets needs optimization.

## The Making of the Application

I have encounter several obstacles while planing and making this app.
Functions under JSX and behavior under CSS were the most challenging among the many hurtles that I encounter.
For more information please see the "Bugs and Fixes" section.

## The API

Is an open, crowd-sourced database of drinks and cocktails from around the world.
They offer a free JSON API with no need for a key for application testing.

## Digital Wireframe

<img width="746" alt="wire1" src="https://user-images.githubusercontent.com/55994508/73419789-0b6fa980-42e6-11ea-912c-5c88f5bfae61.jpg">

## Browser View 1

<img width="746" alt="wire2" src="https://user-images.githubusercontent.com/55994508/73419871-4bcf2780-42e6-11ea-8ce9-8b49e7f9a006.png">

## Browser View 2

<img width="746" alt="screen1" src="https://user-images.githubusercontent.com/55994508/73419902-6acdb980-42e6-11ea-8d1b-d301b49dcfe1.png">

## Mobile View 1

<img width="373" alt="screen2" src="https://user-images.githubusercontent.com/55994508/74897899-01c5e880-535e-11ea-8b76-f85ec155a129.png">

## Mobile View 2

<img width="373" alt="screen3" src="https://user-images.githubusercontent.com/55994508/74897912-0a1e2380-535e-11ea-8a87-d754a8838752.png">

## Code Sample

```javascript
    const ingredients = [];
    function getRecipeIngredients() {
        let i = 1;
        while (recipe['strIngredient' + i]) {
            const name = recipe['strMeasure' + i];
            const measurement = recipe['strIngredient' + i];
            ingredients.push(name + ' ' + measurement);
            i++;
        }
```

This code help me render 15 different ingredients and measurements in the correct format.(_source: Mindy Marmol_)

## Features

**Elixir: Drink Recipes** is currently at the **Bronze** Level features functionality.

-   **Bronze/Minimum Viable Product**

-   [x] Search input bar
-   [x] Results display after search
-   [x] Link to individual result page

-   **Silver**

-   [ ] Display Random/featured drinks upon entry
-   [ ] Search filtered by several categories
-   [ ] Display total number of recipes

-   **Gold**

-   [ ] Browse drinks by first letter
-   [ ] Mixology news feed added to main page
-   [ ] Interactive map to locate liquor stores near by

-   **Platinum**

-   [ ] Social media sharing option

## User Story

As an adult who loves to relax, perhaps have a drink after a stressful day. I want a way to prepare great drinks and enjoy myself while doing it. **Elixir: Drinks Recipe** is a great tool to achieve my goal while learning about **Mixology**.

## Technologies used

-   [HTML](https://www.w3.org/TR/html52/)
-   [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
-   [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [JSX](https://reactjs.org/docs/introducing-jsx.html)
-   [React](https://reactjs.org/)
-   [React Router](https://www.freecodecamp.org/news/beginner-s-guide-to-react-router-53094349669/)
-   [API](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)
-   [Heroku](https://www.heroku.com/)

## Contribution Guidelines

Submit contribution through my repository for approval through this link:
[Application Repo](https://github.com/rixiobarrios/cocktail-recipe)

## Bugs

1. ~~Responsive built for mobile devices does not render correctly~~
2. ~~Issue with Heroku repo push~~
3. ~~"Not Found" result message not centered~~
4. ~~Individual result data for would give error on null values~~
5. ~~Search results would not stay on page upon returning~~
6. ~~Issue rendering main logo onto App.js header.~~

## Fixes

1. Used Grid to place results in a dynamic setting
2. I deleted the files propmted by the error on the terminal
3. Sage Kearny suggested I use grid-column: 2;
4. Mindy Marmol helped me create a function that bypassed "null" results and display ingredients and measurements together
5. Added componentDidMount and componentDidUpdate to store and callback search result data
6. Sage Kearny suggested to move the image from the src folder to the public folder

## Attributions

API source provided by [thecocktaildb.com](https://www.thecocktaildb.com/)
Wireframes were made using [wireframe.cc](https://wireframe.cc)
Personal branding logo for this file was created using [freelogodesign.org](https://www.freelogodesign.org)
Online GIF maker used [hnet.com](https://hnet.com/)
Image converter to .svg used [pngtosvg.com](https://www.pngtosvg.com/)
Images edited using [pixlr.com](https://pixlr.com/)
Color scheme maker used [coolors.co](http://www.coolors.co)
Icon image converter to .ico used [icoconvert.com](https://icoconvert.com/)

# Special Thanks

**General Assembly Team:**
Jared Morgan
**General Assembly Students:**
Sage Kearny, Ryan Zimmer, Mindy Marmol

## Acknowledgement

I have been relying on my cohort mates to share the burden and happiness of this amazing learning journey. I have found a new family in them. My family and friends continue to support me and trust that I am capable of finishing the course. Thank you **Chris Mendoza** for helping me navigate through my times being stuck and pushing me to think for myself and come up with my own answers.

## Others

`stackoverflow.com, css-tricks.com, github.com, thecocktaildb.com, heroku.com, freecodecamp.org, medium.com, pixlr.com, draw.io, coolors.co, w3.org, w3schools, reactjs.org, iconvert.com, youtube.com, pngtosvg.com, hnet.com, freelogodesign.org, wireframe.cc,`

## Disclaimer

-   Don't drink if you're not of legal age in your country of residence.

-   Never drink and drive.

-   Drinking excessively will cause harm to your body and mind.

-   Always drink responsibly.

## Need Help with a Drinking Problem?

Please contact [Alcoholics Anonymous](https://www.aa.org) for information and links to local A.A. offices and Websites where you can find A.A. meetings or talk to an A.A. member.(_source: Alcoholics Anonymous National Website_)

##Other notes:
Jared Morgan 1:45 PM
I’m still seeing a key related error in the console on your deployed app. Just a heads up that you’ll have until Monday to fix any errors and other fixes before we grade.

Dan Fruth suggested to have a default value in the beginning of the page such as my favorite recipe, before putting a random generated option that would change everytime you reload or arrive to the page.
