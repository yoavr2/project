function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Midbarak" && password === "192021") {
        window.location.href = "video.html";
    } else {
        alert("Incorrect Username or Password. Try again!");
    }
}
