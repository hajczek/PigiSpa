import $ from "jquery";

// Handle dates for room
export let roomFrom;
export let roomTo;
export let Difference_In_Days;

/**
 * @description Calculate number of days for room between two dates
 */
export function calculateDaysNumberForRoom() {
  // Define values of dates for room
  roomFrom = $(`#room-from`).val();
  roomTo = $(`#room-to`).val();

  // Create new dates from data for room to calculate number of days
  let date1 = new Date(roomFrom);
  let date2 = new Date(roomTo);

  // Calculate the time difference of two dates
  let Difference_In_Time = date2.getTime() - date1.getTime();

  // Calculate number of days between two dates
  Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
}
