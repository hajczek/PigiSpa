export let todayDate;
export let yearFromTodayDate;

/**
 * @description Calculate the limit for dates in the reservation field
 */
export function limitDateFunction(e) {
  // Define dates elements for input with date type for set min and max date
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let yearFromToday = year + 1;

  // Set 0 before day if length of this element is 1
  if (day.toString().length === 1) {
    day = "0" + day;
  }

  // Set 0 before month if length of this element is 1
  if (month.toString().length === 1) {
    month = "0" + month;
  }

  // Define date for today
  todayDate = year.toString() + "-" + month.toString() + "-" + day.toString();

  // Define date for year after today
  yearFromTodayDate =
    yearFromToday.toString() + "-" + month.toString() + "-" + day.toString();
}
