import Layout from "./views/Layout";
import routes from "./consts/routes";
import startTitleAnimation from "./helpers/startTitleAnimation";
import localeHandler from "./helpers/localeHandler";
import loadCssFile from "./helpers/loadCssFile";
import replacePath from "./helpers/replacePath";

import "styles/styles.sass";

const rootId = "root";
async function render() {
    // strip the repo name so "/Gayathra_Portfolio/" becomes "/"
    const rawPath = window.location.pathname.replace("/Gayathra_Portfolio", "") || "/";
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

replacePath()
    .then(() => render())
    .then(() => localeHandler());
