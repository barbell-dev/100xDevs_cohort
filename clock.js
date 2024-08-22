//24-hour format
// let count = 0;
// function print() {
//   //   console.log(Date.ge);
//   let date = new Date();
//   console.log(
//     date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
//   );
//   if (count == 10) {
//     console.log("Done");
//     return;
//   }
//   count++;
//   setTimeout(print, 1000);
// }
// setTimeout(print, 1000);

//12 hour format
let count = 0;
function print() {
  //   console.log(Date.ge);
  let date = new Date();
  //   console.log(typeof date.getHours());
  if (date.getHours() > 12) {
    console.log(
      date.getHours() -
        12 +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds() +
        " PM"
    );
  } else if (date.getHours() == 12) {
    console.log(
      date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds() +
        " PM"
    );
  } else {
    console.log(
      date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds() +
        " AM"
    );
  }
  if (count == 10) {
    console.log("Done");
    return;
  }

  count++;
  setTimeout(print, 1000);
}
setTimeout(print, 1000);
