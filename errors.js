const { customError } = require("./customError");
// const myError = new customError("This is a custom error message");
// throw myError;
// try {
//   findData();
// } catch (e) {
//   console.log("err occured");
//   console.log(e);
// }
// uncaughtexception

const findData = () => {
  // const data = fetch("localhost:300/api");
  console.log("resolved");
  data = "Iam resolved";
  return data;
};
// process.on("uncaughtException", (err) => {
//   console.log("uncaugh exception happend", err);
//   process.exit(1);
// });
// findData();

//exception with promise

// const promise = new Promise((res, rej) => {
//   if (false) {
//     res(findData());
//   } else {
//     rej(findData());
//   }
// });
// promise
//   .then((val) => console.log(val))
//   .catch((err) => {
//     console.log("err occured");
//     console.log(err);
//   });

// exception with async await

const getData = async () => {
  try {
    await findData();
  } catch (err) {
    throw new customError(err.message);
  }
};
getData();
