const a = 5;
const b = 6;
const c = 7;

const s = (a+b+c)/2;
const steps = (s*(s - a) * (s - b) * (s - c));
const area = Math.sqrt(steps)
console.log(area);