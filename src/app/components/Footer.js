import MediaIcon from "./MediaIcon";
import media from "@/consts/media";

export default (t) => {
    return /*html*/ `
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__info">                         
                            <a class="footer__email" href="${media.email}">${media.emailRaw}</a>
                        
                        <p class="footer__description">${t.description}</p>
                    </div>
                    <div class="footer__media">
                        <div class="footer__title">${t.media}</div>
                        <div class="footer__list">
                            ${["linkedin", "github", "twitter", "facebook", "instagram", "email"]

                                .map((name) => MediaIcon({ name }))
                                .join("")}
                        </div>
                    </div>
                </div>
                <div class="footer__copyright">© ${t.copyright}</div>
            </div>

        </footer>
    `;
};
