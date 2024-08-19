const form = document.querySelector('form');
const email = document.getElementById('input-email');
const password = document.getElementById('input-password');
const error = document.getElementById('form-error');

const mockUser = {
    email: "matheusmello225@gmail.com",
    password: "onepieceisreal",
}

async function validateForm(e) {
    e.preventDefault();
    
    const isEmailValid = await validateEmail();
    const isPasswordValid = await validatePassword();

    if (isEmailValid && isPasswordValid) {
        alert('Login efetuado com sucesso!');
    } else {
        loginError(e);
        return;
    }
}

async function validateEmail() {
    try {
        const emailReturned = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(email.value === mockUser.email);
            }, 500);
        });

        if (!emailReturned) {
            return false;
        }

        return true;
    } catch (err) {
        console.error("Erro inesperado ao validar o email:", err);
        return false;
    }
}

async function validatePassword() {
    try {
        const passwordReturned = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(password.value === mockUser.password);
            }, 500);
        });

        if (!passwordReturned) {
            return false;
        }

        return true;
    } catch (err) {
        console.error("Erro inesperado ao validar a senha:", err);
        return false;
    }
}

function loginError(e) {
    e.preventDefault();
    error.hidden = false;
    email.style.border = `2px solid red`;
    password.style.border = `2px solid red`;
}

function clearInput() {
    error.hidden = true;
    email.style.border = `1px solid #ccc`;
    password.style.border = `1px solid #ccc`;
}

email.addEventListener('input', () => {
    if (email.value === "") {
        clearInput();
    }
});

password.addEventListener('input', () => {
    if (password.value === "") {
        clearInput();
    }
});