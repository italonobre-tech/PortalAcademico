// ==========================================
// CADASTRO.JS - INTEGRADO AO BACKEND C# E MOCK
// ==========================================

const API_CONFIG = {
    USE_MOCK_API: true, // Mude para false quando for conectar ao backend C# real
    REAL_API: {
        BASE_URL: '/api',
        REGISTER: '/alunos',
        COURSES: '/cursos'
    }
};

// Captura os elementos do DOM no momento correto (evita que fiquem 'null')
function getElements() {
    return {
        form: document.getElementById('registerForm') || document.getElementById('formCadastro') || document.querySelector('form'),
        firstName: document.getElementById('firstName') || document.getElementById('nome'),
        lastName: document.getElementById('lastName') || document.getElementById('sobrenome'),
        email: document.getElementById('email') || document.getElementById('regEmail'),
        username: document.getElementById('username') || document.getElementById('regUser'),
        password: document.getElementById('password') || document.getElementById('senha') || document.getElementById('regPassword'),
        confirmPassword: document.getElementById('confirmPassword') || document.getElementById('confirmarSenha'),
        courseSelect: document.getElementById('courseSelect') || document.getElementById('curso'),
        semester: document.getElementById('semester') || document.getElementById('periodo'),
        acceptTerms: document.getElementById('acceptTerms') || document.getElementById('termos'),
        registerBtn: document.getElementById('registerBtn') || document.querySelector('button[type="submit"]'),
        errorMessage: document.getElementById('errorMessage') || document.getElementById('feedbackMessage'),
        errorText: document.getElementById('errorText'),
        successMessage: document.getElementById('successMessage'),
        successText: document.getElementById('successText')
    };
}

document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    initEventListeners();
    setupPasswordStrength();

    const elements = getElements();
    if (elements.firstName) elements.firstName.focus();
});

function loadCourses() {
    const select = elements.courseSelect || document.getElementById('courseSelect');
    if (!select) return;

    const cursos = ['biomedicina', 'enfermagem', 'psicologia', 'civil', 'administracao', 'contabilidade', 'direito'];
    select.innerHTML = '<option value="">Selecione seu curso</option>' +
        cursos.map(c => `<option value="${c}">${c.toUpperCase()}</option>`).join('');
}

    fetch(`${API_CONFIG.REAL_API.BASE_URL}${API_CONFIG.REAL_API.COURSES}`)
        .then(res => res.json())
        .then(cursos => {
            select.innerHTML = '<option value="">Selecione seu curso</option>';
            cursos.forEach(curso => {
                select.innerHTML += `<option value="${curso.id || curso}">${curso.nome || curso}</option>`;
            });
        })
        .catch(error => {
            console.error('Erro ao carregar cursos:', error);
            select.innerHTML = '<option value="">Erro ao carregar cursos</option>';
        });
}

function initEventListeners() {
    const elements = getElements();

    if (elements.form) {
        elements.form.addEventListener('submit', handleRegister);
    } else if (elements.registerBtn) {
        elements.registerBtn.addEventListener('click', handleRegister);
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

    document.querySelectorAll('.toggle-password, .btn-toggle-eye').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-target');
            const target = targetId ? document.getElementById(targetId) : btn.previousElementSibling;
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
    const elements = getElements();

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
    if (elements.courseSelect && !course) {
        showError('Selecione seu curso');
        elements.courseSelect.focus();
        return false;
    }
    if (elements.semester && !semester) {
        showError('Selecione seu período');
        elements.semester.focus();
        return false;
    }
    if (elements.acceptTerms && !acceptTerms) {
        showError('Aceite os Termos de Uso');
        return false;
    }
    return true;
}

async function handleRegister(event) {
    if (event) event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const elements = getElements();

    try {
        if (API_CONFIG.USE_MOCK_API) {
            await new Promise(resolve => setTimeout(resolve, 600));

            const emailInput = elements.email ? elements.email.value.trim() : '';
            const usernameInput = elements.username && elements.username.value.trim() ? elements.username.value.trim() : emailInput;

            // Busca SEMPRE a versão mais recente do LocalStorage
            let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

            // Evita duplicados no Mock
            const existe = registeredUsers.some(u => u.email.toLowerCase() === emailInput.toLowerCase() || (u.username && u.username.toLowerCase() === usernameInput.toLowerCase()));
            if (existe) {
                showError('Usuário ou E-mail já cadastrado!');
                setLoading(false);
                return;
            }

            const userData = {
                id: Date.now(),
                firstName: elements.firstName ? elements.firstName.value.trim() : usernameInput,
                lastName: elements.lastName ? elements.lastName.value.trim() : '',
                fullName: `${elements.firstName ? elements.firstName.value.trim() : ''} ${elements.lastName ? elements.lastName.value.trim() : ''}`.trim(),
                email: emailInput,
                username: usernameInput,
                password: elements.password ? elements.password.value : '',
                course: elements.courseSelect ? elements.courseSelect.value : '',
                semester: elements.semester ? elements.semester.value : '1',
                createdAt: new Date().toISOString()
            };

            // Salva na lista do localStorage
            registeredUsers.push(userData);
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

            showSuccess(`Cadastro realizado com sucesso! Redirecionando...`);

            // Redireciona para o login.html
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1200);

        } else {
            // --- REAL API C# ---
            const nomeCompleto = elements.lastName && elements.lastName.value.trim()
                ? `${elements.firstName.value.trim()} ${elements.lastName.value.trim()}`
                : (elements.firstName ? elements.firstName.value.trim() : '');

            const alunoData = {
                Nome: nomeCompleto,
                Email: elements.email ? elements.email.value.trim() : '',
                Usuario: elements.username ? elements.username.value.trim() : '',
                Senha: elements.password ? elements.password.value : '',
                Curso: elements.courseSelect ? elements.courseSelect.value : '',
                Periodo: elements.semester ? parseInt(elements.semester.value) : 1
            };

            const response = await fetch(`${API_CONFIG.REAL_API.BASE_URL}${API_CONFIG.REAL_API.REGISTER}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(alunoData)
            });

            const data = await response.json();

            if (response.ok) {
                showSuccess(data.mensagem || 'Cadastro realizado com sucesso!');
                setTimeout(() => { window.location.href = 'login.html'; }, 1200);
            } else {
                showError(data.erro || data.message || 'Erro ao realizar cadastro.');
            }
        }
    } catch (error) {
        showError('Erro de conexão com o servidor. Tente novamente.');
    } finally {
        setLoading(false);
    }
}

function setupPasswordStrength() {
    const elements = getElements();
    if (elements.password) {
        elements.password.addEventListener('input', (e) => checkPasswordStrength(e.target.value));
    }
}

function showError(message) {
    const elements = getElements();
    if (elements.errorText && elements.errorMessage) {
        elements.errorText.textContent = message;
        elements.errorMessage.style.display = 'block';
        if (elements.successMessage) elements.successMessage.style.display = 'none';
    } else if (elements.errorMessage) {
        elements.errorMessage.textContent = message;
        elements.errorMessage.style.display = 'block';
    } else {
        alert(message);
    }
}

function showSuccess(message) {
    const elements = getElements();
    if (elements.successText && elements.successMessage) {
        elements.successText.textContent = message;
        elements.successMessage.style.display = 'block';
        if (elements.errorMessage) elements.errorMessage.style.display = 'none';
    } else if (elements.successMessage) {
        elements.successMessage.textContent = message;
        elements.successMessage.style.display = 'block';
    } else {
        alert(message);
    }
}

function setLoading(isLoading) {
    const elements = getElements();
    if (!elements.registerBtn) return;

    if (isLoading) {
        elements.registerBtn.innerHTML = 'Criando conta...';
        elements.registerBtn.disabled = true;
    } else {
        elements.registerBtn.innerHTML = 'Criar conta';
        elements.registerBtn.disabled = false;
    }
}