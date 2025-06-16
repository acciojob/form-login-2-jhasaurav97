//your JS code here. If required.
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
	alert(`${fName.value} ${lName.value} ${phone.value} ${email.value}`);
})