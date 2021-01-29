import '../node_modules/normalize.css/normalize.css';
import '../node_modules/milligram/dist/milligram.css';
import './fontello.css';
import './index.scss';

import imgProfle from './img/profile.png';
document.getElementById('profile').src = imgProfle;
document.getElementById("year").innerHTML = (new Date()).getFullYear();

function showMoreWhoAmi() {
    document.getElementById('whoami-more-button').style.display = 'none';
    document.getElementById('whoami-more').style.display = 'block';
    document.getElementById('profile').style.marginBottom = 0;
}

document.getElementById('whoami-more-button').addEventListener('click', showMoreWhoAmi);

// Siema Carousel
import Siema from 'siema';
const carousel = new Siema({
    duration: 500,
    onInit: () => setInterval(() => {
        carousel.next();
    }, 5000),
    loop: true,
});
document.querySelector('.carousel-prev').addEventListener('click', () => carousel.prev());
document.querySelector('.carousel-next').addEventListener('click', () => carousel.next());