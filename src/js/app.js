import hamburger from "./modules/hamburger";
import moreInformation from "./modules/moreInformation";

window.addEventListener('DOMContentLoaded', () => {
    hamburger('.menu__open', '.menu__close', '.menu__list');
    moreInformation();
})