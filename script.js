const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  alert(`First Name: ${fName}
Last Name: ${lName}
Phone Number: ${phone}
Email ID: ${email}`);
});