// var html = "";
// var counter = 1;

// rows.forEach((row) => {
//   html += `<div class='label'>${row}</div>`;
//   for (let i = 0; i < 3; i++) {
//     html += `<div id='${row + counter}'>${counter}</div>`;
//     counter++;
//   }
//   counter=counter+12
// });
// document.getElementById("left").innerHTML = html;

// html = ''
// counter = 4

// rows.forEach((row) => {
//   // html += `<div class='label'>${row}</div>`;
//   for (let i = 0; i < 9; i++) {
//     html += `<div id='${row + counter}'>${counter}</div>`;
//     counter++;
//   }

//   counter+=6
// });
// document.getElementById("middle").innerHTML = html;

// html = ''
// counter = 13

// rows.forEach((row) => {

//   for (let i = 0; i < 3; i++) {
//     html += `<div id='${row + counter}'>${counter}</div>`;
//     counter++;
//   }
//   html += `<div class='label'>${row}</div>`;
//   counter+=12
// });

var rows = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
];
var counter = 1;
function makeRows(place, loop, count) {
  var html = "";
  rows.forEach((row) => {

    if (place == "left") {
      html += `<div class='label'>${row}</div>`;
    }

    for (let i = 0; i < loop; i++) {
      html += `<div class='a' id='${row + counter}'>${counter}</div>`;
      counter++;
    }
    counter += count;
    
    if (place === "right") {
      html += `<div class='label'>${row}</div>`;
    }
  });

  document.getElementById(place).innerHTML = html;
}
makeRows("left", 3, 12);
makeRows("middle", 9, 6);
makeRows("right", 3, 12);
