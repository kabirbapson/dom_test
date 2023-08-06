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

var reservedSeats = {
  record1: {
    seat: "b19",
    owner: {
      fname: "Joe",
      lname: "smith",
    },
  },
  record2: {
    seat: "b20",
    owner: {
      fname: "Joe",
      lname: "smith",
    },
  },
  record3: {
    seat: "b21",
    owner: {
      fname: "Joe",
      lname: "smith",
    },
  },
  record4: {
    seat: "b22",
    owner: {
      fname: "Joe",
      lname: "smith",
    },
  },
};

// for (var obj in reservedSeats) {
//   var reserved = reservedSeats[obj].seat;
//   console.log(reserved)
//   document.getElementById(reserved.seat).className = 'r'
// }

function makeRows(place, loop) {
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
  var html = "";
  var counter = 1;

  rows.forEach((row) => {
    if (place == "left") {
      html += `<div class='label'>${row}</div>`;
    } else if (place == "right") {
      counter += 12;
    } else {
      counter += 3;
    }

    for (let i = 0; i < loop; i++) {
      html += `<div class='a' id='${row + counter}'>${counter}</div>`;
      counter++;
    }
    // counter += count;

    if (place == "left") {
      counter += 12;
    } else if (place === "right") {
      html += `<div class='label'>${row}</div>`;
    } else {
      counter += 3;
    }
  });

  document.getElementById(place).innerHTML = html;
}
makeRows("left", 3);
makeRows("middle", 9);
makeRows("right", 3);

for (const key in reservedSeats) {
  if (reservedSeats.hasOwnProperty(key)) {
    const obj = reservedSeats[key];
    document.getElementById(obj.seat).className = "r";
    document.getElementById(obj.seat).innerHTML = "R";
  }
}
var selectedSeats = [];
var allSeats = document.querySelectorAll(".a");
allSeats.forEach((seats) => {
  seats.addEventListener("click", (event) => {
    var seat = event.target.id;
    addToSeatsArray(seat);
  });
});
function addToSeatsArray(seatID) {
  var index = selectedSeats.indexOf(seatID);
  if (index < 0) {
    selectedSeats.push(seatID);
    document.getElementById(seatID).className = "s";
  } else {
    selectedSeats.splice(index, 1);
    document.getElementById(seatID).className = "a";
  }
  manageConfirmForm();
  console.log(selectedSeats);
}
document.getElementById("reserve").addEventListener("click", function (e) {
  document.getElementById("resform").style.display = "block";
  e.preventDefault();
});
document.getElementById("cancel").addEventListener("click", function (e) {
  document.getElementById("resform").style.display = "";
  e.preventDefault();
});

function manageConfirmForm() {
  if (selectedSeats.length > 0) {
    document.getElementById("confirmres").style.display = "block";
    var seatToString = selectedSeats.toString()
    var seatComma = seatToString.replace(',', ', ')
    document.getElementById("selectedseats").innerHTML = `You have selected ${seatComma } Seats`

  } else {
    document.getElementById("confirmres").style.display = "none";
    document.getElementById("selectedseats").innerHTML = `You need to select some seats to reserve. <br> <a href='#' id='error'>Close</a> this dialog and pick at least one seat`
    
    document.getElementById("error").addEventListener("click", function (e) {
      document.getElementById("resform").style.display = "";
      e.preventDefault();
    });
  }
}
manageConfirmForm();

