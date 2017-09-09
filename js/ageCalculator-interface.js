import { AgeCalculator } from './../js/ageCalculator.js';

$(document).ready(function(){
  $('#time').text(moment().format('MM/DD/YYYY'));

  $('#user-form').submit(function(event){
    event.preventDefault();
    const birthdate = $('#birthdate').val();
    const gender = $('input:radio[name=gender]:checked').val();

    let calculate = new AgeCalculator();

    const earthAge = calculate.yearAge(birthdate);
    const secondsAge = calculate.secondsByDate(birthdate);
    const lifeExpectancy = calculate.averageLifeExpectancy(gender);
    const yearsLeft = calculate.yearsLeftOnEarth(birthdate, gender);

    const mercuryAge = calculate.mercuryAge(birthdate);
    const yearsLeftMercury = calculate.yearsLeftOnMercury(birthdate, gender);
    const venusAge = calculate.venusAge(birthdate);
    const yearsLeftVenus = calculate.yearsLeftOnVenus(birthdate, gender);

    const marsAge = calculate.marsAge(birthdate);
    const yearsLeftMars = calculate.yearsLeftOnMars(birthdate, gender);

    const jupiterAge = calculate.jupiterAge(birthdate);
    const yearsLeftJupiter = calculate.yearsLeftOnJupiter(birthdate, gender);

    $('#results').append("<li>" + "Your years on Earth in seconds = " + secondsAge + "</li>");
    $('#results').append("<li>" + "Your age in Earth years = " + earthAge + "</li>");
    $('#results').append("<li>" + "Your life expectancy on Earth in years = " + lifeExpectancy + "</li>");
    $('#results').append("<li>" + yearsLeft + "</li>");

    $('#results').append("<li>" + "Your age in Mercury years = " + mercuryAge + "</li>");
    $('#results').append("<li>" + yearsLeftMercury + "</li>");

    $('#results').append("<li>" + "Your age in Venus years = " + venusAge + "</li>");
    $('#results').append("<li>" + yearsLeftVenus + "</li>");

    $('#results').append("<li>" + "Your age in Mars years = " + marsAge + "</li>");
    $('#results').append("<li>" + yearsLeftMars + "</li>");

    $('#results').append("<li>" + "Your age in Jupiter years = " + jupiterAge + "</li>");
    $('#results').append("<li>" + yearsLeftJupiter + "</li>");
  });

  $('#date-form').submit(function(event){
    event.preventDefault();
    const startDate = $('#start-date').val();
    const endDate = $('#end-date').val();
    let calculate = new AgeCalculator();
    const seconds = calculate.secondsBetween(endDate, startDate);
    $('#seconds-results').text("There are " + seconds + " seconds between " + startDate + " and " + endDate);
  });

});
