// Get the current date and time
const today = new Date();

// Set the date of Christmas this year
const crismas = new Date(today.getFullYear(), 11, 25);

// Calculate the time difference between Christmas and the current date in milliseconds
const oneDay = 1000 * 60 * 60 * 24;
const timeLeft = crismas.getTime() - today.getTime();

// Calculate the number of days left until Christmas
const daysLeft = Math.ceil(timeLeft / oneDay);

// Print the number of days left until Christmas to the console
console.log(daysLeft);
