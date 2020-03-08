import './styles/app.scss';
import './imgs/woman.svg';
import './imgs/mail.svg';

const baseUrl = window.location.origin;
const url = window.location.href;
const homeUrl = '/';

if(url == baseUrl + homeUrl){
    let adBorders = document.querySelectorAll('li');
    for (let index = 0; index < adBorders.length; index++) {
        const adBorder = adBorders[index];
        adBorder.onmouseenter = () => adBorder.classList.add('active');
        adBorder.onmouseover = () => adBorder.classList.add('active');
        adBorder.onmouseleave = () => adBorder.classList.remove('active');
        adBorder.onmouseout = () => adBorder.classList.remove('active');
        adBorder.onclick = () => {
            let container = document.querySelector('.modal-container');
            let modals = document.querySelectorAll('.modal');
            container.style.display = 'block';
            modals[index - 1].classList.add('active');
            modals[index - 1].onclick = () => {
                modals[index - 1].classList.remove('active');
                modals[index - 1].addEventListener('transitionend', () => container.style.display = 'none' );
            }
        };
    }
}