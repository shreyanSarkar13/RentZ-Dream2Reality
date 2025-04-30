document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Mock login validation
  const validUser = "user123";
  const validPass = "pass123";

  if (username === validUser && password === validPass) {
    message.style.color = "green";
    message.textContent = "Login successful!";
    // Redirect to homepage or dashboard after successful login
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password";
  }
});