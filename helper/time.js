'use strict';

class Time {
   constructor(date) {
      this.past = new Date(date);
   }

   getNameOfDay(numberOfDay) {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[numberOfDay];
   }

   getNameOfMonth(numberOfMonth) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return months[numberOfMonth];
   }

   format(level) {
      let date = this.past.getDate();
      let year = this.past.getFullYear();
      let day = this.getNameOfDay(this.past.getDay());
      let month = this.getNameOfMonth(this.past.getMonth());

      if (level === 'hard') return `${day}, ${month} ${date}, ${year}`;
      if (level === 'medium') return `${month} ${date}, ${year}`;
      if (level === 'easy') return `${month} ${year}`;

      return new Error('Level Not Found');
   }
}

module.exports = Time;
