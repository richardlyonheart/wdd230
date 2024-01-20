var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

const lastModified = new Date(document.lastModified);
document.querySelector('#lastModified').textContent = today;
