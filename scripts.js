console.log('Script iniciado');

setTimeout(function() {
    console.log('Executando após timeout');
    
    const navbar = document.getElementById('mainNavbar');
    const mainContent = document.getElementById('mainContent');
    const headerSection = document.querySelector('.header-section'); // Usando o header em vez da logo
    
    console.log('Navbar:', navbar);
    console.log('MainContent:', mainContent);
    console.log('HeaderSection:', headerSection);
    
    if (!navbar) {
        console.error('Navbar com ID "mainNavbar" não encontrada!');
        return;
    }
    
    if (!mainContent) {
        console.error('Main com ID "mainContent" não encontrado!');
        return;
    }
    
    if (!headerSection) {
        console.error('Header com classe "header-section" não encontrado!');
        return;
    }
    
    console.log('Todos os elementos encontrados! Configurando scroll...');
    
    // Função para tornar a navbar fixa quando rolar
    window.addEventListener('scroll', function() {
        // Agora usa o final do header em vez da logo
        const headerBottom = headerSection.offsetTop + headerSection.offsetHeight;
        
        if (window.scrollY >= headerBottom) {
            console.log('Ativando navbar fixa');
            navbar.classList.add('navbar-scrolled');
            mainContent.classList.add('offset-active');
        } else {
            navbar.classList.remove('navbar-scrolled');
            mainContent.classList.remove('offset-active');
        }
    });

    // Smooth scroll para os links da navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = navbar.classList.contains('navbar-scrolled') ? 76 : 0;
                
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
    
}, 100);