const kp1 = document.querySelector("#pwd1");
const kp2 = document.querySelector("#pwd2");
const message = document.querySelector("#form");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗passwords DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#red";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}