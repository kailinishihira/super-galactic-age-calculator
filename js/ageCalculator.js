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

  // daysInYear(date){
  //   return moment([this.yearAge(date)]) * 365;
  // }

  mercuryAge(date){
    const daysOld = this.yearAge(date) * 365;
    const mercuryDaysInYear = 365 * .24;
    return Math.floor(daysOld / mercuryDaysInYear);
  }

  venusAge(date){
    const daysOld = this.yearAge(date) * 365;
    const venusDaysInYear = 365 * .62;
    return Math.floor(daysOld / venusDaysInYear);
  }

  // marsAge(date){
  //   return Math.floor(this.yearAge(date) * 1.88);
  // }


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
