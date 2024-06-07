function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${month}-${day}-${year}, ${month}/${day}/${year} or ${day}-${month}-${year}, ${day}/${month}/${year}`;
}

const today = new Date();
const output = formatDate(today);
console.log(output);
