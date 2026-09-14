// ==========================================
// LOGIN.JS - VERSÃO SIMPLIFICADA
// ==========================================

const API_CONFIG = {
    USE_MOCK_API: true
};

document.addEventListener('DOMContentLoaded', () => {
    initializeLoginSystem();
});

async function initializeLoginSystem() {
    const loginBtn = document.getElementById('loginBtn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const courseSelect = document.getElementById('courseSelect');
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    const successMessage = document.getElementById('successMessage');
    const successText = document.getElementById('successText');
    const togglePassword = document.getElementById('togglePassword');
    const rememberMe = document.getElementById('rememberMe');
    const forgotLink = document.getElementById('forgotPassword');

    if (rememberMe) {
        rememberMe.disabled = true;
        rememberMe.style.opacity = '0.5';
    }

    function validateRememberMe() {
        const username = usernameInput?.value.trim();
        const password = passwordInput?.value.trim();
        const course = courseSelect?.value;
        const allFieldsFilled = username && password && course;

        if (rememberMe) {
            if (allFieldsFilled) {
                rememberMe.disabled = false;
                rememberMe.style.opacity = '1';
                rememberMe.style.cursor = 'pointer';
            } else {
                rememberMe.disabled = true;
                rememberMe.style.opacity = '0.5';
                rememberMe.checked = false;
            }
        }
    }

    if (usernameInput) usernameInput.addEventListener('input', validateRememberMe);
    if (passwordInput) passwordInput.addEventListener('input', validateRememberMe);
    if (courseSelect) courseSelect.addEventListener('change', validateRememberMe);

    await loadCourses(courseSelect);
    await checkAutoLogin();

    if (loginBtn) {
        loginBtn.addEventListener('click', async () => {
            const username = usernameInput?.value.trim();
            const password = passwordInput?.value.trim();
            const course = courseSelect?.value || '';

            if (!username) {
                showError('Preencha o usuário!', errorMessage, errorText, successMessage);
                usernameInput.focus();
                return;
            }
            if (!password) {
                showError('Preencha a senha!', errorMessage, errorText, successMessage);
                passwordInput.focus();
                return;
            }
            if (!course) {
                showError('Selecione seu curso!', errorMessage, errorText, successMessage);
                courseSelect.focus();
                return;
            }

            await performLogin(username, password, course, rememberMe?.checked,
                errorMessage, errorText, successMessage, successText);
        });
    }

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
            togglePassword.textContent = passwordInput.type === 'password' ? '👁️' : '🙈';
        });
    }

    if (forgotLink) {
        forgotLink.addEventListener('click', async (e) => {
            e.preventDefault();
            const email = prompt('Digite seu e-mail para recuperar a senha:');
            if (email && email.includes('@')) {
                alert(`E-mail de recuperação enviado para ${email}!`);
            } else if (email) {
                alert('E-mail inválido!');
            }
        });
    }
}

async function performLogin(username, password, course, remember, errorMsg, errorTxt, successMsg, successTxt) {
    const btn = document.getElementById('loginBtn');
    btn.disabled = true;
    btn.innerHTML = 'Entrando <span class="loading"></span>';

    try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const localUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const user = localUsers.find(u => (u.username === username || u.email === username) && u.password === password);

        if (user) {
            const userData = {
                id: user.id || Date.now(),
                name: user.firstName || username.split('@')[0],
                email: user.email || username,
                username: user.username,
                course: course || user.course,
                firstName: user.firstName,
                lastName: user.lastName,
                semester: user.semester || '1',
                courseName: user.courseName || course
            };

            if (remember) {
                localStorage.setItem('currentUser', JSON.stringify(userData));
            } else {
                sessionStorage.setItem('currentUser', JSON.stringify(userData));
            }

            showSuccess('Login realizado com sucesso!', successMsg, successTxt, errorMsg);

            const container = document.querySelector('.container');
            if (container) container.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } else {
            showError('Usuário não encontrado! Faça seu cadastro primeiro.', errorMsg, errorTxt, successMsg);
        }
    } catch (error) {
        showError('Erro de conexão. Tente novamente.', errorMsg, errorTxt, successMsg);
    } finally {
        btn.disabled = false;
        btn.innerHTML = 'Entrar';
    }
}

async function checkAutoLogin() {
    const usuarioLogado = localStorage.getItem('currentUser') ||
        sessionStorage.getItem('currentUser') ||
        localStorage.getItem('usuario') ||
        localStorage.getItem('token');

    if (usuarioLogado) {
        window.location.href = 'index.html';
    }
}

async function loadCourses(courseSelect) {
    if (!courseSelect) return;

    const mockCourses = ['biomedicina', 'enfermagem', 'psicologia', 'civil', 'administracao', 'contabilidade', 'direito'];
    courseSelect.innerHTML = '<option value="">Selecione seu curso</option>' +
        mockCourses.map(c => `<option value="${c}">${c.toUpperCase()}</option>`).join('');
}

function showError(message, errorMsg, errorTxt, successMsg) {
    if (errorMsg && errorTxt) {
        errorTxt.textContent = message;
        errorMsg.classList.add('show');
        if (successMsg) successMsg.classList.remove('show');
        setTimeout(() => errorMsg.classList.remove('show'), 5000);
    } else alert(message);
}

function showSuccess(message, successMsg, successTxt, errorMsg) {
    if (successMsg && successTxt) {
        successTxt.textContent = message;
        successMsg.classList.add('show');
        if (errorMsg) errorMsg.classList.remove('show');
        setTimeout(() => successMsg.classList.remove('show'), 3000);
    }
}