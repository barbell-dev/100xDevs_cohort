let count = 0;
setTimeout(hey, 10000);
function hey() {
  console.log("Hey");
}
function greet() {
  count++;
  console.log(`Printing after ${count} ${count > 1 ? "seconds" : "second"}`);
  if (count == 5) {
    console.log("Done");
    clearInterval(interval);
  }
}
interval = setInterval(greet, 1000);
