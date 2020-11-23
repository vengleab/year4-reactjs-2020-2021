
const isNaN = Number.isNaN(3/"a")
console.log("NaN", 3/"a");
console.log("isNotANumber", isNaN);

console.log("Finite", 3/1);
console.log("Infinite", 3/0);

console.log("Finite", Number.isFinite(3/1));
console.log("Infinite", Number.isFinite(3/0));

console.log("SafeInteger", Number.isSafeInteger(1000000));
console.log("Not SafeInteger", Number.isSafeInteger(100000000000000000000));
