const btn = document.getElementById("btn");
btn.style.width = "4cm";
btn.style.margin = "20% auto";

btn.addEventListener("click", function () {
	const r = Math.floor(Math.random() * 255) + 1;
	const g = Math.floor(Math.random() * 255) + 1;
	const b = Math.floor(Math.random() * 255) + 1;

	document.body.style.backgroundColor = `rgb(${r} , ${g} , ${b})`;
});
