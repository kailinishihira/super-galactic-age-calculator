import { AgeCalculator } from './../js/ageCalculator.js';

$(document).ready(function(){
  $('#time').text(moment().format('MM/DD/YYYY'));

  $('#user-form').submit(function(event){
    event.preventDefault();
    const birthdate = $('#birthdate').val();
    let calculate = new AgeCalculator();

    const earthAge = calculate.yearAge(birthdate);
    const secondsAge = calculate.secondsByDate(birthdate);


    $('#output').append("<li>" + "Your Earth years = " + earthAge + "</li>");
    $('#output').append("<li>" + "Your years on Earth in seconds = " + secondsAge + "</li>");
    });
});

// users age in seconds
// age in mercury years
// age in venus years
// age in mars years
// age in jupiter years
// years left to live on each planet
// years outlived age expectancy
