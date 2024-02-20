//makes a menu that can be collapsed in the smaller screens veiws
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navlist');



hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
  
hamButton.classList.toggle('open');
});