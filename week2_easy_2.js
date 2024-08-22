//10 seconds
setTimeout(print, 1000);
let count = 0;
function print(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  count++;

  console.log(`Printing after ${count} second`);
  if (count == 10) {
    console.log("Done");
    return;
  }
  setTimeout(print, 1000);
}
