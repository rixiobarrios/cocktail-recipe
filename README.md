    <img width="373" src="https://user-images.githubusercontent.com/55994508/72132492-b377ff80-3344-11ea-9baf-6bd3a4b02324.png" alt="logo" style="display: block; margin: 0 auto" />

# Project #2: Elixir: Drink Recipes Version 1.0

## Definition

**Elixir** is a clear, sweet-flavored liquid used for medical purposes, to be taken orally and intended to cure one's illness.When used as a pharmaceutical preparation, an elixir contains at least one active ingredient designed to be taken orally.(_source: Wikipedia_)

**Recipes** are sets of instructions that describes how to prepare or make something, especially a dish of prepared food.
The term recipe is also used in medicine or in information technology (_e.g., user acceptance_). A doctor will usually begin a prescription with recipe, Latin for take, usually abbreviated as Rx or the equivalent symbol (℞).(_source: Wikipedia_)

**Mixology** is another term for a bartender or bar chef. However, mixology is generally accepted as a refined and in-depth study of the art and craft of mixing drinks. Think of it as the study of the chemistry of drinks, and the mixologist as the professional who studies and practices that.(_source: The Spruce Eats_)

## Link to the Application

[Elixir: Drink Recipes](Link for application here)

## Application Preview

<img width="746" alt="" src="">

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

Upon entry, you are presented with featured drink choices. You can pick one of them or use the search bar to find the drink of your choice based on a few criteria.
Once you have chosen your drink, you are presented with ingredients and instructions in how to prepare the given drink.

## Hardware Platform

This game is _web-based_ application for use on a desktop and laptop computers. _Mobile_ option for phones and tablets needs optimization.

## The Making of the Application

I have encounter several obstacles while planing and making this app.
Functions under JSX and behavior under CSS were the most challenging among the many hurtles that I encounter.

## The API

Is an open, crowd-sourced database of drinks and cocktails from around the world.
They also offer a free JSON API for anyone wanting to use it.

## Handmade Wireframes

<img width="746" alt="wire1" src="">

## Digital Wireframe

<img width="746" alt="wire2" src="">

## Recorded Progress Image 1

<img width="746" alt="screen1" src="">

## Recorded Progress Image 2

<img width="746" alt="screen2" src="">

## Recorded Progress Image 3

<img width="746" alt="screen3" src="">

## Code Sample

```javascript
function computerPlay() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    calculateResults();
}
```

This code help me simulate the choices another player would make.(\_source: `help here`)

## Features

**Elixir: Drink Recipes** is currently at the **Silver** Level features functionality.

-   **Bronze/Minimum Viable Product**

-   [x] Search input bar
-   [x] Results display after search
-   [x] Link to individual result page

-   **Silver**

-   [x] Display Random/featured drinks upon entry
-   [ ] Search filtered by several categories
-   [ ] Display total number of recipes

-   **Gold**

-   [ ] Browse drinks by first letter
-   [ ] Mixology news feed added to main page
-   [ ] Interactive map to locate liquor stores near by

## User Story

As an adult who loves to relax, perhaps have a drink after a stressful day. I want a way to prepare great drinks and enjoy myself while doing it. **Elixir: Drinks Recipe** is a great tool to achieve my goal while learning about **Mixology**.

## Technologies used

-   [HTML](https://www.w3.org/TR/html52/)
-   [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
-   [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [React](https://reactjs.org/)
-   [React Router](https://www.freecodecamp.org/news/beginner-s-guide-to-react-router-53094349669/)
-   [API](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)

## Contribution Guidelines

Submit contribution through my repository for approval through this link:
[Application Repo](https://github.com/rixiobarrios/cocktail-recipe)

## Bugs

1. Responsive built for mobile devices does not render correctly
2. ~~Issue with Heroku repo push~~
3. ~~"Not Found" result message not centered~~
4. ~~Individual result data for would give error on null values~~
5. ~~Search results would not stay on page upon returning~~
6. ~~Issue rendering main logo onto App.js header.~~

## Fixes

1. None
2. None
3. Sage Kearny suggested I use grid-column: 2;
4. Mindy Marmol helped me create a function that bypassed "null" results and display ingredients and measurements together
5. Added componentDidMount and componentDidUpdate to store and callback search result data
6. Sage Kearny suggested to move the image from the src folder to the public folder

## Attributions

API source provided by [thecocktaildb.com](https://www.thecocktaildb.com/)
Wireframes were made using [wireframe.cc](https://wireframe.cc)
Personal branding logo for this file was created using [freelogodesign.org](https://www.freelogodesign.org)
Online GIF maker used [hnet.com](https://hnet.com/)
Image conversion tool user [pngtosvg.com](https://www.pngtosvg.com/)
Images edited using [pixlr.com](https://pixlr.com/)
Fonts provided by [dafont.com](https://www.dafont.com)
Color scheme maker used [coolors.co](http://www.coolors.co)

# Special Thanks

**General Assembly Team:**
Jared Morgan
**General Assembly Students:**
Sage Kearny, Ryan Zimmer, Mindy Marmol

## Acknowledgement

I would like to give special thanks to our tutors as well as my cohort mates who gave me the golden opportunity to do this wonderful project. I had a good chance to further my knowledge as an aspiring software engineer by doing a lot of research and practicing my newly acquired knowledge. I came to know about so many new things, I am really thankful to everyone who contributed to this experience.
Secondly I would also like to thank my family and friends who helped me a lot in finalizing this project within the limited time frame. A **big** shout out to my friend **Chris Mendoza** for supporting and believing in me and my potential to succeed(_Gracias hermano_).

## Others

`stackoverflow.com, css-tricks.com, github.com, , freecodecamp.org, medium.com, pixlr.com, draw.io, coolors, w3.org, reactjs.org`

## Disclaimer

-   Don't drink if you're not of legal age in your country of residence.

-   Never drink and drive.

-   Drinking excessively will cause harm to your body and mind.

-   Always drink responsibly.

## Need Help with a Drinking Problem?

Please contact [Alcoholics Anonymous](https://www.aa.org) for information and links to local A.A. offices and Websites where you can find A.A. meetings or talk to an A.A. member.(_source: Alcoholics Anonymous National Website_)
