// const sum = () => console.log(`the sum is ${2 + 3}`);
// const mul = () => console.log(`the mul is ${2 * 3}`);

// const measureTime = () => {
//   console.time("sum()");
//   sum();
//   console.timeEnd("sum()");
//   console.time("mul()");
//   mul();
//   console.timeEnd("mul()");
// };
// measureTime();
// const progressBar = require("progress");
// const bar = new progressBar("downloading [:bar] :rate/bps :percent :etas", {
//   total: 20,
// });

// const timer = setInterval(() => {
//   bar.tick();
//   if (bar.complete) {
//     clearInterval(timer);
//   }
// }, 200);
// const car = require("./car");
const { data } = require("./car");

console.log(data.ford);
console.log(data.ford1);
