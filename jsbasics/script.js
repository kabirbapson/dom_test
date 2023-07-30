(function () {
  let convertType = "miles";

  const header = document.querySelector("h1");
  const para = document.querySelector("p");
  const form = document.querySelector("form");
  const answer = document.getElementById("answer");

  document.addEventListener("keydown", function (e) {
    var key = e.code;
    if (key == "KeyM") {
      header.innerHTML = "Miles to Kilometers Converter";
      para.innerHTML =
        "Type in a number of miles and click the button to convert the distance to kilometers.";
      convertType = "miles";
    } else if (key == "KeyK") {
      header.innerHTML = "Kilometers to Miles Converter";
      para.innerHTML =
        "Type in a number of kilometers and click the button to convert the distance to miles.";
      convertType = "kilometers";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var distance = parseFloat(document.getElementById("distance").value);

    if (distance) {
      if (convertType == "miles") {
        let converted = (distance * 1.60934).toFixed(3);
        answer.innerHTML = `${distance} Miles to Kilometers is ${converted}`;
      } else if (convertType == "kilometers") {
        let converted = (distance * 0.621371).toFixed(3);
        answer.innerHTML = `<h2>${distance} KM to Miles is ${converted}</h2>`;
      }
      // console.log(convertType)
    } else {
      answer.innerHTML = `<h2>Please provide a valid number </h2>`;
    }
  });
})();
