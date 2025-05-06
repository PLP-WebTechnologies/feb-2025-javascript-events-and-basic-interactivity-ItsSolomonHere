// Button Click Event
document.getElementById("clickBtn").addEventListener("click", () => {
    document.getElementById("clickMessage").innerText = "Button was clicked!";
  });
  
  // Hover Effect
  document.getElementById("hoverDiv").addEventListener("mouseover", () => {
    document.getElementById("hoverDiv").style.backgroundColor = "#d3d3d3";
  });
  document.getElementById("hoverDiv").addEventListener("mouseout", () => {
    document.getElementById("hoverDiv").style.backgroundColor = "";
  });
  
  // Keypress Detection
  document.getElementById("keypressInput").addEventListener("keypress", (event) => {
    document.getElementById("keypressMessage").innerText = `You pressed: ${event.key}`;
  });
  
  // Secret Action: Double-click or Long Press
  let timer;
  document.getElementById("secretBtn").addEventListener("mousedown", () => {
    timer = setTimeout(() => {
      document.getElementById("secretMessage").innerText = "Long press detected!";
    }, 1000);
  });
  document.getElementById("secretBtn").addEventListener("mouseup", () => {
    clearTimeout(timer);
  });
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    document.getElementById("secretMessage").innerText = "Double-click detected!";
  });
  
  // Interactive Button: Change Text or Color
  document.getElementById("colorBtn").addEventListener("click", () => {
    const btn = document.getElementById("colorBtn");
    btn.style.backgroundColor = btn.style.backgroundColor === "blue" ? "green" : "blue";
    btn.innerText = btn.style.backgroundColor === "blue" ? "I'm Blue!" : "I'm Green!";
  });
  
  // Image Gallery Interaction
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      alert(`You clicked on ${item.alt}`);
    });
  });
  
  // Accordion Toggle
  document.querySelectorAll(".accordion-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });
  
  // Form Validation
  document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const formMessage = document.getElementById("formMessage");
  
    if (!username || !email || !password) {
      formMessage.innerText = "All fields are required!";
      formMessage.style.color = "red";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formMessage.innerText = "Please enter a valid email address.";
      formMessage.style.color = "red";
    } else if (password.length < 8) {
      formMessage.innerText = "Password must be at least 8 characters.";
      formMessage.style.color = "red";
    } else {
      formMessage.innerText = "Form submitted successfully!";
      formMessage.style.color = "green";
    }
  });
  