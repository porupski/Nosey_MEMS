console.log('load-components.js loaded!');

// Load shared HTML components
async function loadComponent(elementId, filePath) {
    console.log(`Attempting to load ${filePath} into ${elementId}`);
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to load ${filePath}: ${response.status}`);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        console.log(`Successfully loaded ${filePath}`);
    } catch (error) {
        console.error(`Error loading component from ${filePath}:`, error);
    }
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, loading components...');
    loadComponent('navbar-placeholder', 'shared/navbar.html');
    loadComponent('sidebar-placeholder', 'shared/sidebar.html');
    loadComponent('footer-placeholder', 'shared/footer.html');
});