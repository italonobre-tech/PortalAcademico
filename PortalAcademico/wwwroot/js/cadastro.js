// ==========================================
// CADASTRO.JS - INTEGRADO AO BACKEND C#
// ==========================================

const API_CONFIG = {
    USE_MOCK_API: false,
    REAL_API: {
        BASE_URL: '/api',
        REGISTER: '/alunos',
        COURSES: '/cursos'
    }
};

const elements = {
    form: document.getElementById('registerForm') || document.getElementById('formCadastro'),
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('lastName'),
    email: document.getElementById('email'),
    username: document.getElementById('username'),
    password: document.getElementById('password') || document.getElementById('senha'),
    confirmPassword: document.getElementById('confirmPassword'),
    courseSelect: document.getElementById('courseSelect'),
    semester: document.getElementById('semester'),
    acceptTerms: document.getElementById('acceptTerms'),
    registerBtn: document.getElementById('registerBtn'),
    errorMessage: document.getElementById('errorMessage'),
    errorText: document.getElementById('errorText'),
    successMessage: document.getElementById('successMessage'),
    successText: document.getElementById('successText')
};

let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    initEventListeners();
    setupPasswordStrength();
    if (elements.firstName) elements.firstName.focus();
});

function loadCourses() {
    const select = elements.courseSelect || document.getElementById('courseSelect');
    if (!select) return;

    // Busca no backend C# e preenche o elemento <select>
    fetch('/api/cursos')
        .then(res => res.json())
        .then(cursos => {
            select.innerHTML = '<option value="">Selecione seu curso</option>';
            cursos.forEach(curso => {
                select.innerHTML += `<option value="${curso}">${curso}</option>`;
            });
        })
        .catch(error => console.error('Erro ao carregar cursos:', error));
}

function initEventListeners() {
    if (elements.form) {
        elements.form.addEventListener('submit', handleRegister);
    }

    if (elements.password) {
        elements.password.addEventListener('input', () => checkPasswordStrength(elements.password.value));
    }

    if (elements.confirmPassword) {
        elements.confirmPassword.addEventListener('input', () => {
            const match = elements.password.value === elements.confirmPassword.value;
            elements.confirmPassword.style.borderColor = match ? '#10b981' : '#dc2626';
        });
    }

    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = document.getElementById(btn.getAttribute('data-target'));
            if (target) {
                target.type = target.type === 'password' ? 'text' : 'password';
                btn.textContent = target.type === 'password' ? '👁️' : '🙈';
            }
        });
    });
}

function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 3) strength = 1;
    if (password.length >= 6) strength = 2;
    if (password.length >= 8 && /[A-Z]/.test(password)) strength = 3;
    if (password.length >= 10 && /[A-Z]/.test(password) && /[0-9]/.test(password)) strength = 4;

    const bars = document.querySelectorAll('.strength-bar');
    bars.forEach((bar, i) => {
        bar.classList.remove('weak', 'medium', 'strong', 'very-strong');
        if (i < strength) {
            if (strength === 1) bar.classList.add('weak');
            else if (strength === 2) bar.classList.add('medium');
            else if (strength === 3) bar.classList.add('strong');
            else if (strength === 4) bar.classList.add('very-strong');
        }
    });
}

function validateForm() {
    const firstName = elements.firstName ? elements.firstName.value.trim() : '';
    const email = elements.email ? elements.email.value.trim() : '';
    const password = elements.password ? elements.password.value : '';
    const confirmPassword = elements.confirmPassword ? elements.confirmPassword.value : '';
    const course = elements.courseSelect ? elements.courseSelect.value : '';
    const semester = elements.semester ? elements.semester.value : '';
    const acceptTerms = elements.acceptTerms ? elements.acceptTerms.checked : true;

    if (elements.firstName && (!firstName || firstName.length < 2)) {
        showError('Nome deve ter pelo menos 2 caracteres');
        elements.firstName.focus();
        return false;
    }
    if (elements.email && (!email || !email.includes('@'))) {
        showError('Digite um e-mail válido');
        elements.email.focus();
        return false;
    }
    if (elements.password && (!password || password.length < 3)) {
        showError('Senha deve ter pelo menos 3 caracteres');
        elements.password.focus();
        return false;
    }
    if (elements.confirmPassword && password !== confirmPassword) {
        showError('As senhas não coincidem');
        elements.confirmPassword.focus();
        return false;
    }
    if (!course) {
        showError('Selecione seu curso');
        elements.courseSelect.focus();
        return false;
    }
    if (!semester) {
        showError('Selecione seu período');
        elements.semester.focus();
        return false;
    }
    if (!acceptTerms) {
        showError('Aceite os Termos de Uso');
        return false;
    }
    return true;
}

async function handleRegister(event) {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
        if (API_CONFIG.USE_MOCK_API) {
            await new Promise(resolve => setTimeout(resolve, 1000));

            const userData = {
                id: Date.now(),
                firstName: elements.firstName.value.trim(),
                lastName: elements.lastName ? elements.lastName.value.trim() : '',
                fullName: `${elements.firstName.value.trim()} ${elements.lastName ? elements.lastName.value.trim() : ''}`,
                email: elements.email.value.trim(),
                username: elements.username ? elements.username.value.trim() : elements.email.value.trim(),
                password: elements.password.value,
                course: elements.courseSelect.value,
                semester: elements.semester.value,
                createdAt: new Date().toISOString()
            };

            registeredUsers.push(userData);
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

            showSuccess(`Cadastro realizado! Bem-vindo(a) ${userData.firstName}!`);
            setTimeout(() => { window.location.href = 'login.html'; }, 2000);
        } else {
            const nomeCompleto = elements.lastName
                ? `${elements.firstName.value.trim()} ${elements.lastName.value.trim()}`
                : elements.firstName.value.trim();

            const alunoData = {
                Nome: nomeCompleto,
                Email: elements.email.value.trim(),
                Senha: elements.password.value,
                Curso: elements.courseSelect.value,
                Periodo: parseInt(elements.semester.value)
            };

            const response = await fetch(`${API_CONFIG.REAL_API.BASE_URL}${API_CONFIG.REAL_API.REGISTER}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(alunoData)
            });

            const data = await response.json();

            if (response.ok) {
                showSuccess(data.mensagem || 'Cadastro realizado com sucesso!');
                setTimeout(() => { window.location.href = 'login.html'; }, 2000);
            } else {
                showError(data.erro || data.message || 'Erro ao realizar cadastro.');
            }
        }
    } catch (error) {
        showError('Erro de conexão com o servidor C#. Tente novamente.');
    } finally {
        setLoading(false);
    }
}

function setupPasswordStrength() {
    if (elements.password) {
        elements.password.addEventListener('input', (e) => checkPasswordStrength(e.target.value));
    }
}

function showError(message) {
    if (elements.errorText && elements.errorMessage) {
        elements.errorText.textContent = message;
        elements.errorMessage.classList.add('show');
        if (elements.successMessage) elements.successMessage.classList.remove('show');
        setTimeout(() => elements.errorMessage.classList.remove('show'), 4000);
    } else {
        alert(message);
    }
}

function showSuccess(message) {
    if (elements.successText && elements.successMessage) {
        elements.successText.textContent = message;
        elements.successMessage.classList.add('show');
        if (elements.errorMessage) elements.errorMessage.classList.remove('show');
    } else {
        alert(message);
    }
}

function setLoading(isLoading) {
    if (!elements.registerBtn) return;

    if (isLoading) {
        elements.registerBtn.innerHTML = 'Criando conta <span class="loading"></span>';
        elements.registerBtn.disabled = true;
    } else {
        elements.registerBtn.innerHTML = 'Criar conta';
        elements.registerBtn.disabled = false;
    }
}