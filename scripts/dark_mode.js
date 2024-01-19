const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        body.style.backgroundColor = "#000";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
        body.style.backgroundColor = "#fff";
		modeButton.textContent = "🕶️";
	}
});