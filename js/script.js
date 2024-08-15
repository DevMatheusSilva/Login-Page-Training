// Load components via fetch API
function loadComponent(componentPath, styleClassName, elementId) {
    fetch (componentPath)
        .then (response => response.text())
        .then (html => {
            document.getElementById(elementId).innerHTML = html;
            document.getElementById(elementId).className = styleClassName;
        })
        .catch (error => {
            console.error("Error loading component: ", error);
        })
}

loadComponent('components/header/header.html', 'header-login', 'header-login');
loadComponent('components/form/form.html', 'form', 'form');
