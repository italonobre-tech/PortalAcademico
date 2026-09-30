// ==========================================
// INDEX.JS - PORTAL DO ALUNO
// coursesData está no courses-data.js
// ==========================================

let currentUserData = {};

// ==========================================
// PREENCHE O BADGE DO CURSO
// ==========================================
function preencherCourseBadge() {
    const badgeText = document.getElementById('courseBadgeText');
    if (!badgeText) return;

    const courseName = currentUserData?.courseName || currentUserData?.course || 'Curso';
    badgeText.textContent = courseName.toUpperCase();
}

// ==========================================
// ATUALIZA OS CARDS DO DASHBOARD (HOME)
// ==========================================
function atualizarCardsDashboard() {
    try {
        // 1. Descobre a chave do curso do aluno
        const rawCourse = currentUserData?.course || currentUserData?.courseName || '';
        const courseKey = rawCourse.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '');

        // 2. Calcula a meta (soma das horas do curso)
        let totalHoras = 0;
        if (courseKey && typeof coursesData !== 'undefined' && coursesData[courseKey]) {
            coursesData[courseKey].forEach(period => {
                period.subjects?.forEach(sub => {
                    const match = (sub.hours || '0').match(/(\d+)/);
                    if (match) totalHoras += parseInt(match[1]);
                });
            });
        }

        // Fallback: se não achou o curso, usa 1000h
        if (totalHoras === 0) totalHoras = 1000;

        // 3. Atualiza o card "Horas Concluídas"
        const statHoras = document.getElementById('statHorasConcluidas');
        if (statHoras) statHoras.textContent = '0h';

        const statMeta = document.getElementById('statMetaCurso');
        if (statMeta) statMeta.textContent = `Meta do curso: ${totalHoras.toLocaleString('pt-BR')}h`;

        // 4. Atualiza o card "Trilha Atual"
        const statTrilha = document.getElementById('statTrilhaAtual');
        if (statTrilha) {
            const cursoNome = (currentUserData?.courseName || currentUserData?.course || 'Curso').toUpperCase();
            const periodo = currentUserData?.semester || '1';
            statTrilha.textContent = `${cursoNome} - ${periodo}º Período`;
        }

    } catch (e) {
        console.warn('Erro ao atualizar cards do dashboard:', e);
    }
}

// ==========================================
// NAVEGA PARA A TELA DE TRILHAS
// ==========================================
function irParaTrilhas() {
    const btnTrilhas = document.getElementById('btnTrilhas');
    if (btnTrilhas) {
        btnTrilhas.click();
    } else {
        // Fallback: se não achar o botão, tenta abrir a tela diretamente
        const telaTrilhas = document.getElementById('tela-trilhas');
        if (telaTrilhas) {
            document.querySelectorAll('.screen').forEach(s => {
                s.classList.add('hidden');
                s.classList.remove('active-screen');
            });
            telaTrilhas.classList.remove('hidden');
            telaTrilhas.classList.add('active-screen');
        }
    }
}

// ==========================================
// RENDERIZAÇÃO DOS CURSOS
// ==========================================
function renderCurriculum(courseKey) {
    const container = document.getElementById('periodsContainer');
    if (!container) return;

    const data = coursesData[courseKey];
    if (!data) {
        container.innerHTML = '<p style="color: white;">Nenhuma disciplina cadastrada para este curso.</p>';
        return;
    }

    container.innerHTML = '';

    data.forEach((period, periodIndex) => {
        const col = document.createElement('div');
        col.className = 'period-column';

        let subjectsHTML = '';
        period.subjects.forEach(sub => {
            const baseContents = sub.trilha?.filter(item => item.tipo === 'base') || [];
            const faculdadeContents = sub.trilha?.filter(item => item.tipo === 'faculdade') || [];

            let trilhaHTML = '';

            if (baseContents.length > 0) {
                trilhaHTML += `
                    <div class="sub-modulo">
                        <div class="sub-header" onclick="toggleSubModulo(this, event)">
                            <span class="sub-title title-base">📚 Ensino Médio (Base)</span>
                            <button class="expand-btn-sm">+</button>
                        </div>
                        <div class="sub-content">
                            <ul class="trilha-list">
                                ${baseContents.map(item => `
                                    <li class="trilha-item">
                                        <div class="trilha-text">
                                            <span class="trilha-title">${item.titulo}</span>
                                            <span class="trilha-desc">${item.desc}</span>
                                        </div>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            }

            if (faculdadeContents.length > 0) {
                trilhaHTML += `
                    <div class="sub-modulo">
                        <div class="sub-header" onclick="toggleSubModulo(this, event)">
                            <span class="sub-title title-facul">🎓 Faculdade</span>
                            <button class="expand-btn-sm">+</button>
                        </div>
                        <div class="sub-content">
                            <ul class="trilha-list">
                                ${faculdadeContents.map(item => `
                                    <li class="trilha-item">
                                        <div class="trilha-text">
                                            <span class="trilha-title">${item.titulo}</span>
                                            <span class="trilha-desc">${item.desc}</span>
                                        </div>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            }

            if (baseContents.length === 0 && faculdadeContents.length === 0) {
                trilhaHTML = `<div class="sub-modulo"><div class="sub-content"><p style="padding:15px;">Nenhum conteúdo disponível</p></div></div>`;
            }

            subjectsHTML += `
                <div class="subject-card">
                    <div class="subject-header" onclick="toggleTrilha(this)">
                        <div class="subject-info">
                            <span class="subject-icon">${sub.icon}</span>
                            <div class="subject-text">
                                <h3>${sub.name}</h3>
                                <p>🕔 ${sub.hours}</p>
                            </div>
                        </div>
                        <button class="expand-btn">▼</button>
                    </div>
                    <div class="trilha-content">
                        ${trilhaHTML}
                    </div>
                </div>
            `;
        });

        col.innerHTML = `
            <div class="period-header">
                <h2>${period.period}</h2>
                <p>${period.desc}</p>
            </div>
            ${subjectsHTML}
        `;
        container.appendChild(col);
    });
}

// ==========================================
// PERFIL
// ==========================================
function loadUserProfile() {
    let currentUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (!currentUser) return;

    try {
        currentUserData = JSON.parse(currentUser);
    } catch (e) {
        console.error('Erro ao ler dados da sessão:', e);
        return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const fullUserData = registeredUsers.find(u => u.username === currentUserData.username || u.email === currentUserData.email);

    if (fullUserData) {
        currentUserData = { ...currentUserData, ...fullUserData };
    }

    const profileFullName = document.getElementById('profileFullName');
    if (profileFullName) {
        const fullName = `${currentUserData.firstName || ''} ${currentUserData.lastName || ''}`.trim();
        profileFullName.textContent = fullName || currentUserData.name || currentUserData.username || 'Usuário';
    }

    const profileUsername = document.getElementById('profileUsername');
    if (profileUsername) profileUsername.textContent = `@${currentUserData.username || 'usuario'}`;

    const profileEmail = document.getElementById('profileEmail');
    if (profileEmail) profileEmail.textContent = currentUserData.email || 'Não informado';

    const profileCourse = document.getElementById('profileCourse');
    if (profileCourse) {
        const courseName = currentUserData.courseName || currentUserData.course || 'Não informado';
        profileCourse.textContent = typeof courseName === 'string' ? courseName.toUpperCase() : courseName;
    }

    const profileSemester = document.getElementById('profileSemester');
    if (profileSemester) {
        const semester = currentUserData.semester || currentUserData.semesterName || 'Não informado';
        profileSemester.textContent = semester;
    }

    const avatarLetter = document.getElementById('avatarLetter');
    if (avatarLetter) {
        const firstLetter = (currentUserData.firstName?.[0] || currentUserData.name?.[0] || currentUserData.username?.[0] || 'U').toUpperCase();
        avatarLetter.textContent = firstLetter;
    }

    const welcomeName = document.getElementById('welcomeName');
    if (welcomeName) {
        const firstName = currentUserData.firstName || currentUserData.name?.split(' ')[0] || currentUserData.username || 'Usuário';
        welcomeName.textContent = `Bem-vindo(a), ${firstName}! 👋`;
    }

    const perfilNome = document.getElementById('perfilNome');
    if (perfilNome) perfilNome.textContent = currentUserData.firstName || 'Não informado';

    const perfilSobrenome = document.getElementById('perfilSobrenome');
    if (perfilSobrenome) perfilSobrenome.textContent = currentUserData.lastName || 'Não informado';

    const perfilEmailConfig = document.getElementById('perfilEmail');
    if (perfilEmailConfig) perfilEmailConfig.textContent = currentUserData.email || 'Não informado';

    const perfilUsuario = document.getElementById('perfilUsuario');
    if (perfilUsuario) perfilUsuario.textContent = currentUserData.username || 'Não informado';

    const perfilCurso = document.getElementById('perfilCurso');
    if (perfilCurso) perfilCurso.textContent = (currentUserData.courseName || currentUserData.course || 'Não informado').toUpperCase();

    const perfilSenha = document.getElementById('perfilSenha');
    if (perfilSenha) perfilSenha.setAttribute('data-real-password', currentUserData.password || 'Sem senha definida');

    const profilePassword = document.getElementById('profilePassword');
    if (profilePassword) profilePassword.setAttribute('data-real-password', currentUserData.password || '');

    updateProfileStats();
}

function updateProfileStats() {
    let disciplinasCount = 0;

    const courseKey = (currentUserData?.course || currentUserData?.courseName || '').toLowerCase();
    if (courseKey && typeof coursesData !== 'undefined' && coursesData[courseKey]) {
        coursesData[courseKey].forEach(period => {
            disciplinasCount += period.subjects?.length || 0;
        });
    }

    const progressoTotal = Math.floor(Math.random() * 100);

    let dias = 0;
    if (currentUserData?.createdAt) {
        const created = new Date(currentUserData.createdAt);
        const hoje = new Date();
        const diffTime = Math.abs(hoje - created);
        dias = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    } else {
        dias = Math.floor(Math.random() * 30) + 1;
    }

    const statDisciplinas = document.getElementById('statDisciplinas');
    if (statDisciplinas) statDisciplinas.textContent = disciplinasCount;

    const statProgresso = document.getElementById('statProgresso');
    if (statProgresso) statProgresso.textContent = `${progressoTotal}%`;

    const statDias = document.getElementById('statDias');
    if (statDias) statDias.textContent = dias;
}

function setupShowPassword() {
    const showPasswordBtn = document.getElementById('showPasswordBtn');
    const profilePassword = document.getElementById('profilePassword');

    if (showPasswordBtn && profilePassword) {
        let isPasswordVisible = false;
        showPasswordBtn.addEventListener('click', () => {
            const realPassword = profilePassword.getAttribute('data-real-password') || '******';
            if (!isPasswordVisible) {
                profilePassword.textContent = realPassword || 'Sem senha definida';
                showPasswordBtn.innerHTML = '🙈 Ocultar';
                isPasswordVisible = true;
            } else {
                profilePassword.textContent = '********';
                showPasswordBtn.innerHTML = '👁️ Mostrar';
                isPasswordVisible = false;
            }
        });
    }

    const btnVerSenha = document.getElementById('btnVerSenha');
    const perfilSenha = document.getElementById('perfilSenha');

    if (btnVerSenha && perfilSenha) {
        let isVisible = false;
        btnVerSenha.addEventListener('click', () => {
            const realPassword = perfilSenha.getAttribute('data-real-password') || '******';
            if (!isVisible) {
                perfilSenha.textContent = realPassword;
                btnVerSenha.innerHTML = '🙈 Ocultar';
                isVisible = true;
            } else {
                perfilSenha.textContent = '********';
                btnVerSenha.innerHTML = '👁️ Ver';
                isVisible = false;
            }
        });
    }
}

function setupEditProfile() {
    const editBtn = document.getElementById('editProfileBtn');
    const modal = document.getElementById('editProfileModal');
    const cancelBtn = document.getElementById('cancelEditProfile');
    const saveBtn = document.getElementById('saveEditProfile');

    if (!editBtn || !modal) return;

    editBtn.addEventListener('click', () => {
        document.getElementById('editFirstName').value = currentUserData?.firstName || '';
        document.getElementById('editLastName').value = currentUserData?.lastName || '';
        document.getElementById('editEmail').value = currentUserData?.email || '';
        document.getElementById('editPassword').value = '';
        document.getElementById('editConfirmPassword').value = '';
        modal.style.display = 'flex';
    });

    if (cancelBtn) cancelBtn.addEventListener('click', () => { modal.style.display = 'none'; });

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const newFirstName = document.getElementById('editFirstName').value.trim();
            const newLastName = document.getElementById('editLastName').value.trim();
            const newEmail = document.getElementById('editEmail').value.trim();
            const newPassword = document.getElementById('editPassword').value;
            const confirmPassword = document.getElementById('editConfirmPassword').value;

            if (newPassword && newPassword !== confirmPassword) {
                showToast('As senhas não coincidem!', 'error');
                return;
            }
            if (newPassword && newPassword.length < 3) {
                showToast('A senha deve ter pelo menos 3 caracteres!', 'error');
                return;
            }

            if (newFirstName) currentUserData.firstName = newFirstName;
            if (newLastName) currentUserData.lastName = newLastName;
            if (newEmail) currentUserData.email = newEmail;
            if (newPassword) currentUserData.password = newPassword;

            const storage = localStorage.getItem('currentUser') ? localStorage : sessionStorage;
            storage.setItem('currentUser', JSON.stringify(currentUserData));

            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
            const userIndex = registeredUsers.findIndex(u => u.username === currentUserData.username);
            if (userIndex !== -1) {
                registeredUsers[userIndex] = { ...registeredUsers[userIndex], ...currentUserData };
                localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
            }

            modal.style.display = 'none';
            loadUserProfile();
            showToast('Perfil atualizado com sucesso!', 'success');
        });
    }

    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
}

function setupLogout() {
    const logoutBtn = document.getElementById('logoutFromProfileBtn');
    const logoutFinalBtn = document.getElementById('btnLogoutFinal');

    const handleLogout = () => {
        if (confirm('Tem certeza que deseja sair do sistema?')) {
            localStorage.removeItem('currentUser');
            sessionStorage.removeItem('currentUser');
            window.location.href = '/html/login.html';
        }
    };

    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    if (logoutFinalBtn) logoutFinalBtn.addEventListener('click', handleLogout);
}

// ==========================================
// NAVEGAÇÃO
// ==========================================
function setupNavigation() {
    const sidebarIcons = document.querySelectorAll('.sidebar-icon');
    const screens = document.querySelectorAll('.screen');

    const navBtns = {
        'btnHome': 'tela-home',
        'btnTrilhas': 'tela-trilhas',
        'btnMenu': 'tela-menu',
        'btnConfig': 'tela-config',
        'profileSettingsBtn': 'tela-perfil'
    };

    Object.keys(navBtns).forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
                screens.forEach(s => {
                    s.classList.add('hidden');
                    s.classList.remove('active-screen');
                });

                const targetScreen = document.getElementById(navBtns[btnId]);
                if (targetScreen) {
                    targetScreen.classList.remove('hidden');
                    targetScreen.classList.add('active-screen');
                }

                sidebarIcons.forEach(icon => icon.classList.remove('active'));
                if (btn.classList.contains('sidebar-icon')) {
                    btn.classList.add('active');
                }

                if (btnId === 'profileSettingsBtn') {
                    loadUserProfile();
                }
            });
        }
    });
}

// ==========================================
// AUXILIARES
// ==========================================
function showToast(message, type = 'info') {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#0f172a';
        document.querySelectorAll('.period-column').forEach(col => col.style.backgroundColor = '#1e293b');
        document.querySelectorAll('.subject-card').forEach(card => card.style.backgroundColor = '#1e293b');
        document.querySelectorAll('.subject-card .subject-text h3').forEach(h3 => h3.style.color = '#fff');
    } else if (theme === 'blue') {
        document.body.style.backgroundColor = '#e0f2fe';
        document.querySelectorAll('.period-column').forEach(col => col.style.backgroundColor = '#38bdf8');
        document.querySelectorAll('.subject-card').forEach(card => card.style.backgroundColor = '#ffffff');
    } else {
        document.body.style.backgroundColor = '#f1f5f9';
        document.querySelectorAll('.period-column').forEach(col => col.style.backgroundColor = '#3175db');
        document.querySelectorAll('.subject-card').forEach(card => card.style.backgroundColor = '#ffffff');
    }
}

function applyFontSize(size) {
    let fontSize = '14px';
    if (size === 'small') fontSize = '12px';
    else if (size === 'large') fontSize = '16px';
    document.body.style.fontSize = fontSize;
}

// ==========================================
// PAINEL DE CONFIGURAÇÕES
// ==========================================
function initSettingsPanel() {
    console.log('🔧 Inicializando engrenagem superior...');

    let overlay = document.getElementById('settingsOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay-settings';
        overlay.id = 'settingsOverlay';
        document.body.appendChild(overlay);
    }

    let panel = document.getElementById('quickSettingsPanel');
    if (!panel) {
        panel = document.createElement('div');
        panel.className = 'quick-settings-panel';
        panel.id = 'quickSettingsPanel';
        panel.innerHTML = `
            <div class="quick-settings-header">
                <h3>⚙️ Configurações Rápidas</h3>
                <button class="close-settings" id="closeSettingsBtn">✕</button>
            </div>
            <div class="quick-settings-body">
                <div class="settings-option">
                    <label>🎨 Tema da Interface</label>
                    <div class="theme-option">
                        <button class="theme-btn" data-theme="light">☀️ Claro</button>
                        <button class="theme-btn" data-theme="dark">🌙 Escuro</button>
                        <button class="theme-btn" data-theme="blue">💙 Azul</button>
                    </div>
                </div>
                <div class="settings-option">
                    <label>📏 Tamanho da Fonte</label>
                    <select id="fontSizeSelect">
                        <option value="small">🔤 Pequeno</option>
                        <option value="medium" selected>🔤 Médio</option>
                        <option value="large">🔤 Grande</option>
                    </select>
                </div>
                <div class="settings-option">
                    <label>🔄 Sincronizar Dados</label>
                    <button id="refreshDataBtn" style="width:100%; padding:12px; background:#3175db; color:white; border:none; border-radius:12px; cursor:pointer;">🔄 Sincronizar Agora</button>
                </div>
            </div>
        `;
        document.body.appendChild(panel);
    }

    function openPanel() { panel.classList.add('open'); overlay.classList.add('show'); }
    function closePanel() { panel.classList.remove('open'); overlay.classList.remove('show'); }

    document.getElementById('closeSettingsBtn')?.addEventListener('click', closePanel);
    overlay.addEventListener('click', closePanel);

    const topSettingsBtn = document.getElementById('topSettingsBtn');
    if (topSettingsBtn) topSettingsBtn.addEventListener('click', (e) => { e.preventDefault(); openPanel(); });

    document.getElementById('refreshDataBtn')?.addEventListener('click', () => {
        showToast('🔄 Dados sincronizados!', 'success');
        const c = currentUserData?.course || currentUserData?.courseName || 'biomedicina';
        if (typeof renderCurriculum === 'function') renderCurriculum(c);
    });

    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyTheme(theme);
            localStorage.setItem('userTheme', theme);
        });
    });

    const fontSizeSelect = document.getElementById('fontSizeSelect');
    if (fontSizeSelect) {
        fontSizeSelect.addEventListener('change', (e) => { applyFontSize(e.target.value); localStorage.setItem('fontSize', e.target.value); });
        const savedFontSize = localStorage.getItem('fontSize') || 'medium';
        fontSizeSelect.value = savedFontSize;
        applyFontSize(savedFontSize);
    }

    const savedTheme = localStorage.getItem('userTheme') || 'light';
    const themeBtn = document.querySelector(`.theme-btn[data-theme="${savedTheme}"]`);
    if (themeBtn) themeBtn.click();
}

// ==========================================
// APIs
// ==========================================
window.carregarLivrosDoCurso = async function (nomeCurso) {
    const container = document.getElementById('booksContainer');
    if (!container) return;

    const termoLimpo = (nomeCurso || 'Biomedicina').split('-')[0].trim();

    const livrosReserva = [
        { titulo: `Guia Prático de ${termoLimpo}`, capa: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&q=80', link: 'https://books.google.com' },
        { titulo: `Fundamentos de ${termoLimpo}`, capa: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&q=80', link: 'https://books.google.com' },
        { titulo: `Manual de Estudos: ${termoLimpo}`, capa: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&q=80', link: 'https://books.google.com' },
        { titulo: `Tópicos Avançados em ${termoLimpo}`, capa: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=200&q=80', link: 'https://books.google.com' }
    ];

    function renderizar(lista) {
        container.style.display = 'grid';
        container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(130px, 1fr))';
        container.style.gap = '15px';
        container.innerHTML = lista.map(item => `
            <a href="${item.link}" target="_blank" style="text-decoration: none; color: #333; text-align: center; display: block; background: #fff; padding: 10px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                <img src="${item.capa}" alt="${item.titulo}" style="width: 100%; height: 140px; object-fit: cover; border-radius: 6px;">
                <p style="font-size: 0.8rem; font-weight: 600; margin-top: 8px; height: 2.4em; overflow: hidden; line-height: 1.2;">${item.titulo}</p>
            </a>
        `).join('');
    }

    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(termoLimpo)}&maxResults=4&langRestrict=pt`);
        if (!response.ok) throw new Error('API Rate Limit');

        const data = await response.json();
        if (data.items && data.items.length > 0) {
            const apiBooks = data.items.map(item => ({
                titulo: item.volumeInfo.title,
                capa: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x193?text=Sem+Capa',
                link: item.volumeInfo.infoLink
            }));
            renderizar(apiBooks);
        } else {
            renderizar(livrosReserva);
        }
    } catch (err) {
        renderizar(livrosReserva);
    }
};

window.perguntarIA = async function () {
    const input = document.getElementById('aiInput');
    const output = document.getElementById('chatOutput');
    if (!input || !output) return;

    const pergunta = input.value.trim();
    if (!pergunta) return;

    output.innerHTML = '🤖 <em>O Tutor IA está analisando sua dúvida...</em>';
    input.value = '';

    const GEMINI_API_KEY = "SUA_CHAVE_GEMINI_AQUI";

    if (GEMINI_API_KEY && GEMINI_API_KEY !== "SUA_CHAVE_GEMINI_AQUI") {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `Você é um tutor acadêmico para estudantes universitários. Responda de forma didática e objetiva à seguinte dúvida: ${pergunta}` }] }]
                })
            });
            const data = await response.json();
            const respostaIA = data.candidates[0]?.content?.parts[0]?.text || "Não foi possível obter resposta.";
            output.innerHTML = `<strong>Tutor IA:</strong> ${respostaIA.replace(/\n/g, '<br>')}`;
        } catch (err) {
            output.innerHTML = '⚠️ Erro ao consultar a IA. Verifique sua chave API.';
        }
    } else {
        setTimeout(() => {
            output.innerHTML = `<strong>Tutor IA:</strong> Sobre "<em>${pergunta}</em>": Esta é uma excelente dúvida! Recomendamos verificar a bibliografia recomendada abaixo para se aprofundar.`;
        }, 800);
    }
};

window.adicionarAoGoogleAgenda = function (titulo, descricao, dataInicio, dataFim) {
    const inicio = new Date(dataInicio).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const fim = new Date(dataFim).toISOString().replace(/-|:|\.\d\d\d/g, '');

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&details=${encodeURIComponent(descricao)}&dates=${inicio}/${fim}`;

    window.open(googleCalendarUrl, '_blank');
};

window.toggleTrilha = function (headerElement) {
    const card = headerElement.parentElement;
    card.classList.toggle('active');
};

window.toggleSubModulo = function (subHeaderElement, event) {
    if (event) event.stopPropagation();
    const subModulo = subHeaderElement.parentElement;
    subModulo.classList.toggle('active');
};

window.irParaTrilhas = irParaTrilhas;

// ==========================================
// INICIALIZAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inicializando sistema do aluno...');

    let rawUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');

    if (!rawUser && !window.location.pathname.endsWith('login.html')) {
        window.location.href = '/html/login.html';
        return;
    }

    // 🎯 VERIFICA SE É ADMIN → MANDA PRO PAINEL DO ADMIN
    if (rawUser) {
        try {
            const u = JSON.parse(rawUser);
            if (u && u.role === 'admin') {
                console.log('⚠️ Admin detectado. Redirecionando para painel do admin...');
                window.location.href = '/html/admin.html';
                return;
            }
        } catch (e) {
            console.warn('Erro ao verificar role:', e);
        }
    }

    loadUserProfile();
    setupNavigation();
    setupShowPassword();
    setupEditProfile();
    setupLogout();
    initSettingsPanel();
    preencherCourseBadge();
    atualizarCardsDashboard();

    const rawCourse = currentUserData?.course || currentUserData?.courseName || 'biomedicina';
    const courseKey = rawCourse.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '');

    if (typeof renderCurriculum === 'function' && typeof coursesData !== 'undefined') {
        renderCurriculum(coursesData[courseKey] ? courseKey : 'biomedicina');
    }
    if (typeof window.carregarLivrosDoCurso === 'function') {
        window.carregarLivrosDoCurso(rawCourse);
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('.subject-card').forEach(card => {
                const title = card.querySelector('.subject-text h3')?.textContent.toLowerCase() || '';
                card.style.display = title.includes(term) ? 'block' : 'none';
            });
        });
    }

    const savedTheme = localStorage.getItem('userTheme') || 'light';
    applyTheme(savedTheme);
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    applyFontSize(savedFontSize);

    console.log('✅ Sistema inicializado!');
});