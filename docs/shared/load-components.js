// Load shared HTML components
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to load ${filePath}`);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component from ${filePath}:`, error);
    }
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('navbar-placeholder', 'shared/navbar.html');
    loadComponent('sidebar-placeholder', 'shared/sidebar.html');
    loadComponent('footer-placeholder', 'shared/footer.html');
});