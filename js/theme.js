function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (window.pJSDom && window.pJSDom[0]) {
            const particlesColor = theme === 'dark' ? '#ecf0f1' : '#2d3436';
            window.pJSDom[0].pJS.particles.color.value = particlesColor;
            window.pJSDom[0].pJS.particles.line_linked.color = particlesColor;
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
    }

    const savedTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

document.addEventListener('DOMContentLoaded', initThemeToggle);
