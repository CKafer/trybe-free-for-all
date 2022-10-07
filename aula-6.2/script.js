let submitButton = document.getElementById('submit');
// console.log(submitButton);

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  let nameValue = document.getElementById('full-name').value;
  alert(`${nameValue}`);
});