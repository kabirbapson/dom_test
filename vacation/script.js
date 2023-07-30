var detailsForm = document.querySelector("#destination_details_form");
detailsForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  var destName = event.target.elements["name"].value;
  var destLocation = event.target.elements["location"].value;
  var destPhoto = event.target.elements["photo"].value;
  var destDescription = event.target.elements["description"].value;

  for (let i = 0; i < detailsForm.length; i++) {
    detailsForm.elements[i].value = "";
  }
    
    var wishListContainer = document.getElementById('destination_container')
    if (wishListContainer.children.length == 0) {
        document.getElementById('title').innerHTML = 'My Wish Lists'
    }
}
