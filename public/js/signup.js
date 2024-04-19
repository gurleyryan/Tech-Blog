const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username_signup").value.trim();
    const password = document.querySelector("#password_signup").value.trim();
  
    if (username && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText + ". Password must be at least 8 characters.");
      }
    }
  };
  
  document
    .querySelector(".signup_form")
    .addEventListener("submit", signupFormHandler);