// ==========================================
// ADMIN.JS - LÓGICA DO PAINEL ADMINISTRATIVO
// ==========================================

let currentAdmin = {};

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inicializando painel do admin...');

    const rawUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (!rawUser) {
        window.location.href = './login.html';
        return;
    }

    try {
        currentAdmin = JSON.parse(rawUser);
    } catch (e) {
        window.location.href = './login.html';
        return;
    }

    if (currentAdmin.role !== 'admin') {
        window.location.href = './index.html';
        return;
    }

    setupNavigation();
    setupLogout();

    carregarEstatisticas();
    carregarAlunos();

    const searchAluno = document.getElementById('searchAluno');
    if (searchAluno) {
        searchAluno.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('#alunosTableBody tr').forEach(tr => {
                const texto = tr.textContent.toLowerCase();
                tr.style.display = texto.includes(term) ? '' : 'none';
            });
        });
    }

    console.log('✅ Painel admin inicializado!');
});

// NAVEGAÇÃO
function setupNavigation() {
    const sidebarIcons = document.querySelectorAll('.sidebar-icon');
    const screens = document.querySelectorAll('.screen');

    const navBtns = {
        'btnHome': 'tela-home',
        'btnAlunos': 'tela-alunos',
        'btnEstatisticas': 'tela-estatisticas',
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
                btn.classList.add('active');

                if (btnId === 'btnEstatisticas') carregarEstatisticas();
                if (btnId === 'btnAlunos') carregarAlunos();
            });
        }
    });
}

// LOGOUT
function setupLogout() {
    const logoutBtn = document.getElementById('logoutAdminBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('Tem certeza que deseja sair do sistema?')) {
                localStorage.removeItem('currentUser');
                sessionStorage.removeItem('currentUser');
                window.location.href = './login.html';
            }
        });
    }
}

// ESTATÍSTICAS
function carregarEstatisticas() {
    const alunos = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    const elTotal = document.getElementById('statTotalAlunos');
    if (elTotal) elTotal.textContent = alunos.length;

    const totalCursos = (typeof coursesData !== 'undefined') ? Object.keys(coursesData).length : 0;
    const elCursos = document.getElementById('statTotalCursos');
    if (elCursos) elCursos.textContent = totalCursos;

    let totalDisciplinas = 0;
    if (typeof coursesData !== 'undefined') {
        for (let c in coursesData) {
            coursesData[c].forEach(p => { totalDisciplinas += p.subjects?.length || 0; });
        }
    }
    const elDisc = document.getElementById('statTotalDisciplinas');
    if (elDisc) elDisc.textContent = totalDisciplinas;

    const hoje = new Date().toDateString();
    const cadastrosHoje = alunos.filter(a => a.createdAt && new Date(a.createdAt).toDateString() === hoje).length;
    const elHoje = document.getElementById('statCadastrosHoje');
    if (elHoje) elHoje.textContent = cadastrosHoje;

    renderAlunosPorCurso(alunos);
    renderAlunosPorPeriodo(alunos);
    renderCadastrosRecentes(alunos);
}

function renderAlunosPorCurso(alunos) {
    const container = document.getElementById('alunosPorCurso');
    if (!container) return;

    const porCurso = {};
    alunos.forEach(a => {
        const c = a.course || 'Sem curso';
        porCurso[c] = (porCurso[c] || 0) + 1;
    });

    const entries = Object.entries(porCurso).sort((a, b) => b[1] - a[1]);

    if (entries.length === 0) {
        container.innerHTML = '<p class="empty-state"><i class="fa-solid fa-inbox"></i><br>Nenhum aluno cadastrado</p>';
        return;
    }

    const max = Math.max(...entries.map(e => e[1]));

    container.innerHTML = entries.map(([curso, qtd]) => `
        <div class="bar-item">
            <span class="bar-label">${curso}</span>
            <div class="bar-track"><div class="bar-fill" style="width: ${(qtd / max) * 100}%"></div></div>
            <span class="bar-value">${qtd}</span>
        </div>
    `).join('');
}

function renderAlunosPorPeriodo(alunos) {
    const container = document.getElementById('alunosPorPeriodo');
    if (!container) return;

    const porPeriodo = {};
    alunos.forEach(a => {
        const p = a.semester || 'N/A';
        porPeriodo[p] = (porPeriodo[p] || 0) + 1;
    });

    const entries = Object.entries(porPeriodo).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

    if (entries.length === 0) {
        container.innerHTML = '<p class="empty-state"><i class="fa-solid fa-inbox"></i><br>Nenhum aluno cadastrado</p>';
        return;
    }

    const max = Math.max(...entries.map(e => e[1]));

    container.innerHTML = entries.map(([periodo, qtd]) => `
        <div class="bar-item">
            <span class="bar-label">${periodo}º Período</span>
            <div class="bar-track"><div class="bar-fill" style="width: ${(qtd / max) * 100}%"></div></div>
            <span class="bar-value">${qtd}</span>
        </div>
    `).join('');
}

function renderCadastrosRecentes(alunos) {
    const container = document.getElementById('cadastrosRecentes');
    if (!container) return;

    const recentes = [...alunos]
        .filter(a => a.createdAt)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);

    if (recentes.length === 0) {
        container.innerHTML = '<p class="empty-state"><i class="fa-solid fa-inbox"></i><br>Nenhum cadastro recente</p>';
        return;
    }

    container.innerHTML = recentes.map(a => {
        const data = new Date(a.createdAt);
        const dataFmt = data.toLocaleDateString('pt-BR') + ' ' + data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        return `
            <div class="cadastro-item">
                <div class="cadastro-info">
                    <strong>${a.firstName || ''} ${a.lastName || ''}</strong>
                    <span>${a.email || ''} • ${(a.course || '').toUpperCase()}</span>
                </div>
                <span class="cadastro-data">${dataFmt}</span>
            </div>
        `;
    }).join('');
}

// LISTA DE ALUNOS
function carregarAlunos() {
    const tbody = document.getElementById('alunosTableBody');
    if (!tbody) return;

    const alunos = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    if (alunos.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="empty-state"><i class="fa-solid fa-inbox"></i><br>Nenhum aluno cadastrado ainda</td></tr>';
        return;
    }

    tbody.innerHTML = alunos.map((a, idx) => {
        const dataCad = a.createdAt ? new Date(a.createdAt).toLocaleDateString('pt-BR') : '-';
        return `
            <tr data-index="${idx}">
                <td><strong>${a.firstName || ''} ${a.lastName || ''}</strong></td>
                <td>${a.email || '-'}</td>
                <td>${a.username || '-'}</td>
                <td><span class="badge badge-curso">${(a.course || '-').toUpperCase()}</span></td>
                <td><span class="badge badge-periodo">${a.semester || '-'}º</span></td>
                <td>${dataCad}</td>
                <td>
                    <button class="btn-acao btn-editar" onclick="editarAluno(${idx})">✏️ Editar</button>
                    <button class="btn-acao btn-excluir" onclick="excluirAluno(${idx})">🗑️</button>
                </td>
            </tr>
        `;
    }).join('');
}

// EDITAR ALUNO
window.editarAluno = function (index) {
    const alunos = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const aluno = alunos[index];
    if (!aluno) return;

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-box">
            <h2>✏️ Editar Aluno</h2>
            <div class="form-group"><label>Nome:</label><input type="text" id="editAlunoNome" value="${aluno.firstName || ''}" style="width:100%; padding:10px; border-radius:8px;"></div>
            <div class="form-group"><label>Sobrenome:</label><input type="text" id="editAlunoSobrenome" value="${aluno.lastName || ''}" style="width:100%; padding:10px; border-radius:8px;"></div>
            <div class="form-group"><label>E-mail:</label><input type="email" id="editAlunoEmail" value="${aluno.email || ''}" style="width:100%; padding:10px; border-radius:8px;"></div>
            <div class="form-group"><label>Usuário:</label><input type="text" id="editAlunoUsuario" value="${aluno.username || ''}" style="width:100%; padding:10px; border-radius:8px;"></div>
            <div class="form-group"><label>Curso:</label><input type="text" id="editAlunoCurso" value="${aluno.course || ''}" style="width:100%; padding:10px; border-radius:8px;"></div>
            <div class="form-group"><label>Período:</label><input type="text" id="editAlunoPeriodo" value="${aluno.semester || ''}" style="width:100%; padding:10px; border-radius:8px;"></div>
            <div class="modal-buttons" style="display:flex; gap:10px; margin-top:20px;">
                <button id="cancelEditAluno" style="flex:1; padding:10px; background:#ccc; border:none; border-radius:8px; cursor:pointer;">Cancelar</button>
                <button id="saveEditAluno" style="flex:1; padding:10px; background:#4CAF50; color:white; border:none; border-radius:8px; cursor:pointer;">Salvar</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('cancelEditAluno').onclick = () => modal.remove();
    document.getElementById('saveEditAluno').onclick = () => {
        alunos[index].firstName = document.getElementById('editAlunoNome').value.trim();
        alunos[index].lastName = document.getElementById('editAlunoSobrenome').value.trim();
        alunos[index].email = document.getElementById('editAlunoEmail').value.trim();
        alunos[index].username = document.getElementById('editAlunoUsuario').value.trim();
        alunos[index].course = document.getElementById('editAlunoCurso').value.trim();
        alunos[index].semester = document.getElementById('editAlunoPeriodo').value.trim();

        localStorage.setItem('registeredUsers', JSON.stringify(alunos));
        modal.remove();
        carregarAlunos();
        carregarEstatisticas();
        alert('✅ Aluno atualizado com sucesso!');
    };
};

// EXCLUIR ALUNO
window.excluirAluno = function (index) {
    const alunos = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const aluno = alunos[index];
    if (!aluno) return;

    const nome = `${aluno.firstName || ''} ${aluno.lastName || ''}`.trim() || aluno.username;

    if (confirm(`Tem certeza que deseja EXCLUIR o aluno "${nome}"?\n\nEssa ação não pode ser desfeita!`)) {
        alunos.splice(index, 1);
        localStorage.setItem('registeredUsers', JSON.stringify(alunos));
        carregarAlunos();
        carregarEstatisticas();
        alert('🗑️ Aluno excluído com sucesso!');
    }
};