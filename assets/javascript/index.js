const serviceID = "service_xzn6z4p";
const templateID = "template_l81exmp";
var params = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  message: document.getElementById("message").value,
};

function sendMail() {
  if (name.value == "" || email.value == "" || message.value == "") {
    alert("Compile the Form!");
  } else {
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        alert("Message sent successfully!!");
      })
      .catch((err) => console.log(err));
  }
}
