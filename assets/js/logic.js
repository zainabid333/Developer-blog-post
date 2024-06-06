




document.addEventListener('DOMContentLoaded', function () {
    const toggleModeButton = document.getElementById('toggleMode');
    // const toggleModeButton = $('#toggleMode');
    function applyTheme(theme) {
        document.body.classList.toggle('dark-mode', theme === 'dark');
    }

    function toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    }

    toggleModeButton.addEventListener('click', toggleTheme);

    // Apply the saved theme on load
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});
