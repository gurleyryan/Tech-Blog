const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username_login").value.trim();
    const password = document.querySelector("#password_login").value.trim();
  
    if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText + ". Incorrect username or password.");
      }
    }
  };
  
  document
    .querySelector(".login_form")
    .addEventListener("submit", loginFormHandler);