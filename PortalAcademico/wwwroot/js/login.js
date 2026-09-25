// ==========================================
// LOGIN.JS - VERSÃO LOCAL (SEM FIREBASE)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Se já está logado, vai pro index
    const activeUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (activeUser && activeUser !== 'null' && activeUser !== 'undefined') {
        window.location.href = 'index.html';
        return;
    }

    // 2. Elementos
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const courseSelect = document.getElementById('courseSelect');
    const loginBtn = document.getElementById('loginBtn');
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    const successMessage = document.getElementById('successMessage');
    const successText = document.getElementById('successText');
    const togglePassword = document.getElementById('togglePassword');
    const rememberMe = document.getElementById('rememberMe');
    const forgotLink = document.getElementById('forgotPassword');

    // 3. Carrega cursos
    const cursos = ['biomedicina', 'enfermagem', 'psicologia', 'civil', 'administracao', 'contabilidade', 'direito'];
    courseSelect.innerHTML = '<option value="">Selecione seu curso</option>' +
        cursos.map(c => `<option value="${c}">${c.toUpperCase()}</option>`).join('');

    // 4. Toggle senha
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
            togglePassword.textContent = passwordInput.type === 'password' ? '👁️' : '🙈';
        });
    }

    // 5. Esqueceu a senha
    if (forgotLink) {
        forgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Entre em contato com o suporte: suporte@portalacademico.com');
        });
    }

    // 6. Funções de mensagem
    function showError(msg) {
        errorText.textContent = msg;
        errorMessage.classList.add('show');
        if (successMessage) successMessage.classList.remove('show');
        setTimeout(() => errorMessage.classList.remove('show'), 4000);
    }

    function showSuccess(msg) {
        successText.textContent = msg;
        successMessage.classList.add('show');
        if (errorMessage) errorMessage.classList.remove('show');
    }

    // 7. SUBMIT (COM preventDefault GARANTIDO)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const course = courseSelect.value;

        if (!username) { showError('Preencha o usuário!'); usernameInput.focus(); return; }
        if (!password) { showError('Preencha a senha!'); passwordInput.focus(); return; }
        if (!course) { showError('Selecione seu curso!'); courseSelect.focus(); return; }

        // Busca nos usuários cadastrados
        const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const foundUser = users.find(u =>
            (u.username === username || u.email === username) && u.password === password
        );

        // Admin de teste
        const isAdmin = (username === 'admin' && password === '123456');

        if (foundUser || isAdmin) {
            loginBtn.disabled = true;
            loginBtn.innerHTML = 'Entrando...';

            const userData = foundUser ? {
                id: foundUser.id,
                firstName: foundUser.firstName,
                lastName: foundUser.lastName,
                name: foundUser.fullName || foundUser.firstName,
                email: foundUser.email,
                username: foundUser.username,
                course: course || foundUser.course,
                courseName: (course || foundUser.course || '').toUpperCase(),
                semester: foundUser.semester || '1'
            } : {
                id: Date.now(),
                firstName: 'Aluno',
                lastName: 'Admin',
                name: 'Aluno Admin',
                email: 'admin@portal.com',
                username: 'admin',
                course: course,
                courseName: course.toUpperCase(),
                semester: '1'
            };

            // Sempre salva em localStorage
            localStorage.setItem('currentUser', JSON.stringify(userData));
            sessionStorage.removeItem('currentUser');

            showSuccess('Login realizado! Redirecionando...');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 600);
        } else {
            showError('Usuário ou senha incorretos. Verifique ou cadastre-se.');
        }
    });
});