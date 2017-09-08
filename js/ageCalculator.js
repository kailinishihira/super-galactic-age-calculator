const moment = require('moment');
moment().format();

export class AgeCalculator {

  secondsAge(age){
    return age * 31536000;
  }

  yearAge(date){
    return moment().diff(moment([date]), 'years');
  }

  secondsByDate(date){
    return this.yearAge(date) * 31536000;
  }

  secondsInADay(numDays){
    return numDays * 86400;
  }

  // daysBetween(date1, date2){
  //   const oneDay = 24*60*60*1000;
  //   const day1 = new Date ([date1]);
  //   const day2 = new Date ([date2]);
  //   Math.round(Math.abs((day1.getTime() - day2.getTime())/(oneDay)));
  // }


  mercuryAge(date){
    return Math.floor(this.yearAge(date) / .24);
  }

  venusAge(date){
    return Math.floor(this.yearAge(date) / .62);
  }

  marsAge(date){
    return Math.floor(this.yearAge(date) / 1.88);
  }

  jupiterAge(date){
    return Math.floor(this.yearAge(date) / 11.86);
  }

  // numberOfDays(date1, date2){
  //   const day1 = moment([date1]);
  //   const day2 = moment([date2]);
  //   return day1.diff(day2, 'days');
  // }

  // secondsDifference(date1, date2){
  //
  //   // const firstDate = moment([date1]);
  //   // const secondDate = moment([date2]);
  //   // return = moment.duration(firstDate.diff(secondDate, 'seconds'));
  // }

//current date
// let now = moment();
}
