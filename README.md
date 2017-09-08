# _Super Galactic Age Calculator_

#### _A web app to calculate a user's age based on a planet's solar years, 09.08.17_

#### By _**Kaili Nishihira**_

## Description

_A web app which will enable the user to enter their age and it will return their age in seconds, Mercury years, Venus years, Mars years, and Jupiter years. The user's life expectancy and number of years left to live will also be determined._

|| Behavior  | Input  | Output  |
|---|---|---|---|
|| User may enter their age in years and it will be converted into seconds, based on a common earth year (365 days).  | User's age: 20 years old | 630720000 |
|| User may enter their birthdate and it will return their age in years | Birthdate: 2000-09-08 | 17 |
|| User may enter their birthdate and it will return their years of age into seconds | Birthdate: 1997-09-08 | 630720000 |
|| It will calculate how many seconds are in a given number of days | Days: 2 | 172800 |
|| User may enter their birthdate and their age in Earth years will be returned in Mercury years (rounded down). A Mercury year is .24 Earth years. | Birthdate: 09/08/2000 | 70 |
|| User may enter their birthdate and their age in Earth years will be returned in Venus years (rounded down). A Venus year is .62 Earth years. | Birthdate: 09/08/2000 | 27 |
|| User may enter their birthdate and their age in Earth years will be returned in Mars years (rounded down). A Mars year is 1.88 Earth years. | Birthdate: 09/08/2000 | 9 |
|| User may enter their birthdate and their age in Earth years will be returned in Jupiter years (rounded down). A Jupiter year is 11.86 Earth years. | Birthdate: 09/08/2000 | 1 |
|| User may enter their birthdate and the number of years left to live on each planet will be returned, based on the user's life expectancy. | Birthdate: 09/08/2000 | Earth: 55 <br> Mercury: 230 <br> Venus: 89 <br> Mars: 29 <br> Jupiter: 5 |
|| User may enter their birthdate and the number of years they have surpassed to live on each planet will be returned, based on the user's life expectancy. | Birthdate: 09/08/1917 ||
|| It will calculate the number of days between two given days | First date: 2017-09-08 <br> Second date: 2017-09-07 | 1 |
|| User may enter two dates and the difference in seconds will be returned. | First date: 09/07/2017 <br> Second date: 09/08/2017 | 86400 seconds|


## Setup/Installation Requirements

* _Install [Node.js](https://nodejs.org/en/download/)_
* _Clone repository_
* `$ npm install`
* `$ bower install`
* `$ gulp build`
* _Open in your browser_

## Technologies Used
* _JavaScript_
* _Node.js_
* _[Bootstrap](http://getbootstrap.com/getting-started/)_


### License

Copyright (c) 2017 **_Kaili Nishihira_**

*Licensed under the [MIT License](https://opensource.org/licenses/MIT)*
