import { AgeCalculator } from './../js/ageCalculator.js';

$(document).ready(function(){
  $('#time').text(moment().format('MM/DD/YYYY'));

  $('#user-form').submit(function(event){
    event.preventDefault();
    $('.results').show();
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

    $('#results-earth').append("<li>" + "Your years on Earth in seconds = " + secondsAge + "</li>");
    $('#results-earth').append("<li>" + "Your age in Earth years = " + earthAge + "</li>");
    $('#results-earth').append("<li>" + "Your life expectancy on Earth in years = " + lifeExpectancy + "</li>");
    $('#results-earth').append("<li>" + yearsLeft + "</li>");

    $('#results-mercury').append("<li>" + "Your age in Mercury years = " + mercuryAge + "</li>");
    $('#results-mercury').append("<li>" + yearsLeftMercury + "</li>");

    $('#results-venus').append("<li>" + "Your age in Venus years = " + venusAge + "</li>");
    $('#results-venus').append("<li>" + yearsLeftVenus + "</li>");

    $('#results-mars').append("<li>" + "Your age in Mars years = " + marsAge + "</li>");
    $('#results-mars').append("<li>" + yearsLeftMars + "</li>");

    $('#results-jupiter').append("<li>" + "Your age in Jupiter years = " + jupiterAge + "</li>");
    $('#results-jupiter').append("<li>" + yearsLeftJupiter + "</li>");
  });

  $('#date-form').submit(function(event){
    event.preventDefault();
    $(".seconds").show();
    const startDate = $('#start-date').val();
    const endDate = $('#end-date').val();
    let calculate = new AgeCalculator();
    const seconds = calculate.secondsBetween(endDate, startDate);
    $('#seconds-results').text("There are " + seconds + " seconds between " + startDate + " and " + endDate);
  });

});
