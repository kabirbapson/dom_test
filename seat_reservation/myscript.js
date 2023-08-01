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
  'n',
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
];
var html = "";
var counter = 1;
rows.forEach((row) => {
  html += `<div class='label'>${row}</div>`;
  for (let i = 0; i < 3; i++) {
    html += `<div id='${row+counter}'>${counter}</div>`;
    counter++;
}
});

document.getElementById("left").innerHTML = html;
