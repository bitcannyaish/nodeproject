// console.log("hi node");
// console.log("have installed nodemon");

const fs = require("fs");
const path = require("path");
const fspromise = require("fs").promises;
// const pathName =
//   "C:/Users/aishw/Desktop/Bitcanny/Practice projects/PracticeApnaCollege/NodeTutorial/fileSystem/sample.txt";
const fileName = "sample.txt";

const pathName = path.join(__dirname, "fileSystem", fileName);
//async
// fs.readFile(
//   path.join(__dirname, "fileSystem", fileName),
//   "utf-8",
//   (err, data) => {
//     if (err) {
//       throw new Error("something went wrong");
//     }
//     console.log(data);
//   }
// );

//sync
// try {
//   const data = fs.readFileSync(
//     path.join(__dirname, "fileSystem", fileName),
//     "utf-8"
//   );
//   console.log(data);
// } catch (err) {
//   throw new Error("something went wrong");
// }
// const readFile = async () => {
//   try {
//     const data = await fspromise.readFile(
//       path.join(__dirname, "fileSystem", "sample.txt"),
//       {
//         encoding: "utf-8",
//       }
//     );
//     console.log(data);
//   } catch (err) {
//     throw new Error("something went wrong");
//   }
// };
// readFile();

const writeFile = async () => {
  const content = "I am writting";
  try {
    await fspromise.writeFile(
      path.join(__dirname, "fileSystem", "text.txt"),
      content
    );
    // await fspromise.appendFile(
    //   path.join(__dirname, "fileSystem", "text.txt"),
    //   "\n this is appending"
    // );
    await fspromise.rename(
      path.join(__dirname, "fileSystem", "text.txt"),
      path.join(__dirname, "fileSystem", "newtext.txt")
    );
    await fspromise.appendFile(
      path.join(__dirname, "fileSystem", "newtext.txt"),
      "\n this is again appending"
    );
    await fspromise.writeFile(
      path.join(__dirname, "fileSystem", "newtext.txt"),
      "\n it;s awesome",
      {
        flag: "a+",
      }
    );
    const data = await fspromise.readFile(
      path.join(__dirname, "fileSystem", "newtext.txt"),
      {
        encoding: "utf-8",
      }
    );
    console.log(data);
  } catch (err) {
    throw new Error("error occured");
  }
};
writeFile();
