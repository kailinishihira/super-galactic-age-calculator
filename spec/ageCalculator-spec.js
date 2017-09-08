import {AgeCalculator} from './../js/ageCalculator.js';

describe('AgeCalculator', function(){
  let calculate;

    beforeEach(function(){
      calculate = new AgeCalculator();
    });

  it("should calculate a user's age in seconds", function(){

    let secondsAge = calculate.secondsAge(20);
    expect(secondsAge).toEqual(630720000);
  });

  it("should calculate a user's age in years based on their birthdate", function(){

    let yearAge = calculate.yearAge('2000-09-08');
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

  // it("should calculate the difference in seconds between two dates", function(){
  //   let secondsDifference = calculate.secondsDifference('2017-09-09','2017-09-07');
  //   expect(secondsDifference).toEqual(86400);
  // });


});
