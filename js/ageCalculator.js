export class AgeCalculator {

  secondsAge(age){
    return age * 31536000;
  }

  yearAge(date){
    let today = new Date();
    let birthdate = new Date(date);
    const age = new Date(today-birthdate).getFullYear()-1970;
    return age;
  }

  secondsByDate(date){
    return this.yearAge(date) * 31536000;
  }

  secondsInADay(numDays){
    return numDays * 86400;
  }

  daysBetween(date1, date2){
    let day1 = new Date(date1);
    let day2 = new Date(date2);
    return (new Date(day1) - new Date(day2)) / 86400000;
  }

  secondsBetween(date1, date2){
    let day1 = new Date(date1);
    let day2 = new Date(date2);
    return (new Date(day1) - new Date(day2)) / 1000;
  }

  mercuryAge(date){
    return Math.floor(this.yearAge(date) / 0.24);
  }

  venusAge(date){
    return Math.floor(this.yearAge(date) / 0.62);
  }

  marsAge(date){
    return Math.floor(this.yearAge(date) / 1.88);
  }

  jupiterAge(date){
    return Math.floor(this.yearAge(date) / 11.86);
  }

  averageLifeExpectancy(gender){
    let avgLife = 71;
    if (gender === "female"){
      return avgLife += 1;
    } else {
      return avgLife -= 3;
    }
  }

  yearsLeftOnEarth(date, gender){
    let averageAge = this.averageLifeExpectancy(gender);
    let yourAge = this.yearAge(date);
    if(yourAge > averageAge){
      const outlivedYears = yourAge - averageAge;
      return("You have outlived your life expectancy on Earth by " + outlivedYears + " years.");
    } else {
      const yearsLeft = Math.floor(averageAge - yourAge);
      return ("You have " + yearsLeft + " years left to live on Earth.");
    }
  }

  yearsLeftOnMercury(date, gender){
    const earthExpectancy = this.averageLifeExpectancy(gender);
    let mercuryExpectancy = Math.floor(earthExpectancy / 0.24);
    let yourAge = this.mercuryAge(date);
    if(yourAge > mercuryExpectancy){
      const outlivedYears = Math.floor(yourAge - mercuryExpectancy);
      return("You have outlived your life expectancy on Mercury by " + outlivedYears + " years.");
    } else {
      const yearsLeft = Math.floor(mercuryExpectancy - yourAge);
      return ("You have " + yearsLeft + " years left to live on Mercury.");
    }
  }

  yearsLeftOnVenus(date, gender){
    const earthExpectancy = this.averageLifeExpectancy(gender);
    let venusExpectancy = Math.floor(earthExpectancy / 0.62);
    let yourAge = this.venusAge(date);
    if(yourAge > venusExpectancy){
      const outlivedYears = Math.floor(yourAge - venusExpectancy);
      return("You have outlived your life expectancy on Venus by " + outlivedYears + " years.");
    } else {
      const yearsLeft = Math.floor(venusExpectancy - yourAge);
      return ("You have " + yearsLeft + " years left to live on Venus.");
    }
  }

  yearsLeftOnMars(date, gender){
    const earthExpectancy = this.averageLifeExpectancy(gender);
    let marsExpectancy = Math.floor(earthExpectancy / 1.88);
    let yourAge = this.marsAge(date);
    if(yourAge > marsExpectancy){
      const outlivedYears = Math.floor(yourAge - marsExpectancy);
      return("You have outlived your life expectancy on Mars by " + outlivedYears + " years.");
    } else {
      const yearsLeft = Math.floor(marsExpectancy - yourAge);
      return ("You have " + yearsLeft + " years left to live on Mars.");
    }
  }

  yearsLeftOnJupiter(date, gender){
    const earthExpectancy = this.averageLifeExpectancy(gender);
    let jupiterExpectancy = Math.floor(earthExpectancy / 11.86);
    let yourAge = this.jupiterAge(date);
    if(yourAge > jupiterExpectancy){
      const outlivedYears = Math.floor(yourAge - jupiterExpectancy);
      return("You have outlived your life expectancy on Jupiter by " + outlivedYears + " years.");
    } else {
      const yearsLeft = Math.floor(jupiterExpectancy - yourAge);
      return ("You have " + yearsLeft + " years left to live on Jupiter.");
    }
  }

}
