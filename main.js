document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const budgetBtn = document.getElementById('budgetBtn');
    const savingsBtn = document.getElementById('savingsBtn');
    const budgetSection = document.getElementById('budgetSection');
    const savingsSection = document.getElementById('savingsSection');

    function showSection(id) {
        sections.forEach(section => {
            section.style.display = section.id === id ? 'block' : 'none';
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href').substring(1) === id);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(link.getAttribute('href').substring(1));
        });
    });

    if (loginBtn && registerBtn) {
        loginBtn.addEventListener('click', () => {
            loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
            registerForm.style.display = 'none';
        });

        registerBtn.addEventListener('click', () => {
            registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
            loginForm.style.display = 'none';
        });
    }

    if (budgetBtn && savingsBtn) {
        budgetBtn.addEventListener('click', () => {
            budgetSection.style.display = budgetSection.style.display === 'none' ? 'block' : 'none';
            savingsSection.style.display = 'none';
        });

        savingsBtn.addEventListener('click', () => {
            savingsSection.style.display = savingsSection.style.display === 'none' ? 'block' : 'none';
            budgetSection.style.display = 'none';
        });
    }

    // Calculadora de Presupuesto
    const budgetForm = document.getElementById('budgetForm');
    const budgetResult = document.getElementById('budgetResult');

    if (budgetForm) {
        budgetForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const income = parseFloat(document.getElementById('income').value);
            const expenses = parseFloat(document.getElementById('expenses').value);
            const remaining = income - expenses;
            budgetResult.textContent = `Tu presupuesto restante es: ${remaining.toFixed(2)} unidades monetarias.`;
        });
    }

    // Planificador de Ahorros
    const savingsForm = document.getElementById('savingsForm');
    const savingsResult = document.getElementById('savingsResult');

    if (savingsForm) {
        savingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const targetAmount = parseFloat(document.getElementById('targetAmount').value);
            const monthlySavings = parseFloat(document.getElementById('monthlySavings').value);
            const months = Math.ceil(targetAmount / monthlySavings);
            savingsResult.textContent = `Necesitarás aproximadamente ${months} meses para alcanzar tu objetivo de ahorro.`;
        });
    }
});
