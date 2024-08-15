const rootElementId = 'root';

// Add your components here
const pageComponents = {
    loginPageComponents: [
        'components/header.html'
    ],
    taskPageComponents: [
        '../tasks-page/components/navbar-component/navbar-component.html',
        '../tasks-page/components/user-info-component/user-info-component.html',
        '../tasks-page/components/week-day-component/week-day-component.html',
        '../tasks-page/components/today-tasks-component/today-tasks-component.html',
        '../tasks-page/components/completed-tasks-component/completed-tasks-component.html'
    ]
}

/**
 * Build component and append it to the root element
 * @param {string} componentPath
 * @returns {Promise<void>}
 */
async function buildComponent(componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(rootElementId).innerHTML += html;
    } catch (error) {
        console.error("Error loading component: ", error);
        console.log(`Component path: ${componentPath} / Element id: ${rootElementId}`);
    }
}

/**
 * Build the page components
 * @param {[string]} components
 * @returns {Promise<void>}
 */
async function buildPage(components) {
    for (const componentPath of components) {
        await buildComponent(componentPath);
    }
}

/**
 * Initialize the page components
 * @returns {Promise<void>}
 */
async function init() {
    // Load the components according to the page route
    // Add your page route and components here
    switch (window.location.pathname) {
        case '/':
            await buildPage(pageComponents.loginPageComponents);
            break;
        case '/pages/tasks-page/index.html':
            await buildPage(pageComponents.taskPageComponents);
            break;
        default:
            break;
    }
}

init();