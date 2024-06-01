function signvalid() {
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    const passwordInputB = document.getElementById("password-again").value;

    if (nameInput.length < 4 || nameInput.length > 8) return false;
    if (!emailInput.includes("@")) return false;
    if (passwordInput.length < 5 || passwordInput.length > 10) return false;
    if (passwordInputB.length < 5 || passwordInputB.length > 10) return false;
    
    return true;
}
