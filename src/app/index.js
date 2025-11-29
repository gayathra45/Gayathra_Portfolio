import Layout from "./views/Layout";
import routes from "./consts/routes";
import startTitleAnimation from "./helpers/startTitleAnimation";
import localeHandler from "./helpers/localeHandler";
import loadCssFile from "./helpers/loadCssFile";
import replacePath from "./helpers/replacePath";

import "styles/styles.sass";

const rootId = "root";
const base = "/Gayathra_Portfolio";

async function render() {
    // strip the repo name so "/Gayathra_Portfolio/" becomes "/"
    const rawPath = window.location.pathname.replace(base, "") || "/";
    const path = routes[rawPath] ?? routes["/404"];

    loadCssFile(path.name);
    startTitleAnimation(path.name);

    document.getElementById(rootId).innerHTML = await Layout(
        (
            await import(`./views/${path.element}`)
        ).default,
        path
    );
}

// Client-side navigation function
function navigate(path) {
    window.history.pushState({}, "", base + path);
    render();
}

// Listen for back/forward buttons
window.addEventListener("popstate", () => {
    render();
});

// Intercept all link clicks for internal navigation
document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link && link.href && link.href.startsWith(window.location.origin + base)) {
        e.preventDefault();
        const path = link.pathname.replace(base, "") || "/";
        navigate(path);
    }
});

replacePath()
    .then(() => render())
    .then(() => localeHandler());
