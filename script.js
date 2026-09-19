function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const target = document.getElementById(sectionId + '-section');
    if (target) {
        target.classList.add('active');
    }

    // Header and Footer visibility
    const header = document.getElementById('main-header');
    const footer = document.getElementById('bottom-nav');

    if (sectionId === 'login') {
        header.style.display = 'none';
        footer.style.display = 'none';
    } else {
        header.style.display = 'flex';
        footer.style.display = 'flex';
    }

    // Update bottom nav active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.id === 'nav-' + sectionId) {
            item.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        // Simulation of login
        console.log('Logging in...', email);
        showSection('search');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function showResults() {
    showSection('results');
}

function showCaregiver(id) {
    // In a real app, we'd fetch data for this ID
    showSection('detail');
}

function startChat(name) {
    document.getElementById('chat-name').innerText = 'Conversar com ' + name;
    showSection('chat');
}

function sendMessage() {
    const input = document.getElementById('chat-input-field');
    const message = input.value.trim();
    
    if (message) {
        const container = document.getElementById('chat-messages');
        
        // Add sent message
        const sentDiv = document.createElement('div');
        sentDiv.className = 'message sent';
        sentDiv.innerText = message;
        container.appendChild(sentDiv);
        
        input.value = '';
        container.scrollTop = container.scrollHeight;

        // Mock response
        setTimeout(() => {
            const receivedDiv = document.createElement('div');
            receivedDiv.className = 'message received';
            receivedDiv.innerText = 'Tudo bem! Podemos agendar para amanhã às 08:00?';
            container.appendChild(receivedDiv);
            container.scrollTop = container.scrollHeight;
        }, 1000);
    }
}

// Verification Section Content (Simple Placeholder)
function initVerification() {
    const section = document.createElement('section');
    section.id = 'verification-section';
    section.className = 'section';
    section.innerHTML = `
        <div class="section-header">
             <button onclick="showSection('search')" class="btn-back"><i class="fas fa-arrow-left"></i></button>
            <h2>Requisitos de segurança</h2>
        </div>
        <div class="verification-list" style="margin-top: 20px;">
            <div class="caregiver-card" style="padding: 15px; display: flex; align-items: center; gap: 15px;">
                <i class="fas fa-shield-halved" style="font-size: 1.5rem; color: var(--primary-color)"></i>
                <div>
                    <h4 style="margin: 0">Selfie com documento</h4>
                    <p style="font-size: 0.8rem; color: var(--text-gray); margin: 0">Verificação biométrica pendente</p>
                </div>
                <i class="fas fa-chevron-right" style="margin-left: auto; color: #ccc"></i>
            </div>
            <div class="caregiver-card" style="padding: 15px; display: flex; align-items: center; gap: 15px;">
                <i class="fas fa-file-contract" style="font-size: 1.5rem; color: var(--primary-color)"></i>
                <div>
                    <h4 style="margin: 0">Antecedentes criminais</h4>
                    <p style="font-size: 0.8rem; color: var(--text-gray); margin: 0">Processado com sucesso</p>
                </div>
                <i class="fas fa-check-circle" style="margin-left: auto; color: var(--primary-color)"></i>
            </div>
        </div>
        <button class="btn-primary" style="margin-top: 30px">Atualizar Documentos</button>
    `;
    document.getElementById('content').appendChild(section);
}

// Profile Section Content
function initProfile() {
    const section = document.createElement('section');
    section.id = 'profile-section';
    section.className = 'section';
    section.innerHTML = `
        <div class="profile-header" style="text-align: center; padding: 20px;">
            <div style="width: 80px; height: 80px; background: #eee; border-radius: 50%; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-user" style="font-size: 2rem; color: #ccc;"></i>
            </div>
            <h3>Seu Perfil</h3>
            <p style="color: var(--text-gray)">Usuário Teste</p>
        </div>
        <div class="profile-menu" style="margin-top: 20px;">
            <div style="padding: 15px; border-bottom: 1px solid #eee; display: flex; align-items: center; gap: 15px;"><i class="fas fa-history" style="color: var(--primary-color)"></i> Histórico de serviços <i class="fas fa-chevron-right" style="margin-left: auto; color: #ccc"></i></div>
            <div style="padding: 15px; border-bottom: 1px solid #eee; display: flex; align-items: center; gap: 15px;"><i class="fas fa-credit-card" style="color: var(--primary-color)"></i> Pagamentos <i class="fas fa-chevron-right" style="margin-left: auto; color: #ccc"></i></div>
            <div style="padding: 15px; border-bottom: 1px solid #eee; display: flex; align-items: center; gap: 15px;"><i class="fas fa-cog" style="color: var(--primary-color)"></i> Configurações <i class="fas fa-chevron-right" style="margin-left: auto; color: #ccc"></i></div>
            <div onclick="showSection('login')" style="padding: 15px; color: #e74c3c; display: flex; align-items: center; gap: 15px; cursor: pointer;"><i class="fas fa-sign-out-alt"></i> Sair</div>
        </div>
    `;
    document.getElementById('content').appendChild(section);
}

// Initialize
window.onload = () => {
    initVerification();
    initProfile();
    // Start at login
    showSection('login');
};
