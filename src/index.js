import '../node_modules/normalize.css/normalize.css';
import '../node_modules/milligram/dist/milligram.css';
import './fontello.css';
import './index.scss';
// Kopien für /dist
require("file-loader?name=web.config!./web.config");

import imgProfle from './img/profile.png';
document.getElementById('profile').src = imgProfle;
document.getElementById("year").innerHTML = (new Date()).getFullYear();

function showMoreWhoAmi() {
    document.getElementById('whoami-more-button').style.display = 'none';
    document.getElementById('whoami-more').style.display = 'block';
    document.getElementById('profile').style.marginBottom = 0;
}

document.getElementById('whoami-more-button').addEventListener('click', showMoreWhoAmi);