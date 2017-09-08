const moment = require('moment');

export class AgeCalculator {

  secondsAge(age){
    return age * 31536000;
  }

  yearAge(date){
    return moment().diff(moment([date]), 'years')
  }

  secondsByDate(date){
    return this.yearAge(date) * 31536000;
  }

  secondsInADay(numDays){
    return numDays * 86400;
  }

  // secondsDifference(date1, date2){
  //   const firstDate = moment([date1]);
  //   const secondDate = moment([date2]);
  //   return = moment.duration(firstDate.diff(secondDate, 'seconds'));
  // }

//current date
// let now = moment();
}
