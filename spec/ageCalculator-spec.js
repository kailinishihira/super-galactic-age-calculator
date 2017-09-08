import {AgeCalculator} from './../js/ageCalculator.js';

describe('AgeCalculator', function(){
  let calculate;
  let birthdate;

    beforeEach(function(){
      calculate = new AgeCalculator();
      birthdate = '2000-09-08';
    });

  it("should calculate a user's age in seconds", function(){

    let secondsAge = calculate.secondsAge(20);
    expect(secondsAge).toEqual(630720000);
  });

  it("should calculate a user's age in years based on their birthdate", function(){

    let yearAge = calculate.yearAge(birthdate);
    expect(yearAge).toEqual(17);
  });

  it("should calculate a user's years of age in seconds, by birthdate", function(){

    let secondsAge = calculate.secondsByDate('1997-09-08');
    expect(secondsAge).toEqual(630720000);
  });

  it("should convert number of days into seconds", function(){
    let secondsDay = calculate.secondsInADay(2);
    expect(secondsDay).toEqual(172800);
  });

  it("should convert number of days into seconds", function(){
    let secondsDay = calculate.secondsInADay(2);
    expect(secondsDay).toEqual(172800);
  });

  it("should convert age in Mercury's solar years", function(){
    let mercuryAge = calculate.mercuryAge(birthdate);
    expect(mercuryAge).toEqual(70);
  });

  it("should convert age in Venus' solar years", function(){
    let venusAge = calculate.venusAge(birthdate);
    expect(venusAge).toEqual(27);
  });

  it("should convert age in Mars' solar years", function(){
    let marsAge = calculate.marsAge(birthdate);
    expect(marsAge).toEqual(9);
  });

  it("should convert age in Jupiter's solar years", function(){
    let jupiterAge = calculate.jupiterAge(birthdate);
    expect(jupiterAge).toEqual(1);
  });

  it("should calculate average life expectancy based on gender", function(){
    let averageLifeExpectancy = calculate.averageLifeExpectancy("female");
    expect(averageLifeExpectancy).toEqual(72);
  });

  it("should calculate number of years left based on average life expectancy", function(){
    let yearsLeft = calculate.yearsLeftOnEarth(birthdate, "female");
    expect(yearsLeft).toEqual(55);
  });

  it("should calculate number of years outlived based on average life expectancy", function(){
    let yearsLeft = calculate.yearsLeftOnEarth('1917-09-08', "female");
    expect(yearsLeft).toEqual("You have outlived your life expectancy by 28 years.");
  });


  // it("should calculate days between dates", function(){
  //   let daysBetween = calculate.daysBetween('2017-09-08', '2017-09-07');
  //   expect(daysBetween).toEqual(1);
  // });


  // it("should calculate the number of days between two dates", function(){
  //   let numberOfDays = calculate.numberOfDays('2017-09-08', '2017-09-07');
  //   expect(numberOfDays).toEqual(1);
  // });

  // it("should calculate the difference in seconds between two dates", function(){
  //   let secondsDifference = calculate.secondsDifference('2017-09-09','2017-09-07');
  //   expect(secondsDifference).toEqual(86400);
  // });


});
