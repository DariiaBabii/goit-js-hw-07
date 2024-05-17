const feedback = document.querySelector(".login-form");

feedback.addEventListener("submit", handlerSendFeedback);

function handlerSendFeedback(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  console.log(`Login: ${email}, Password: ${password}`);
  event.target.reset();
}
