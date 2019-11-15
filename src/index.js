import '../node_modules/normalize.css/normalize.css';
import '../node_modules/milligram/dist/milligram.css';
import './fontello.css';
import './index.scss';
// Kopien für /dist
require("file-loader?name=web.config!./web.config");

document.getElementById('profile').src = require('./img/profile.png');
document.getElementById("year").innerHTML = (new Date()).getFullYear();

function showMoreWhoAmi() {
    document.getElementById('whoami-more-button').style.display = 'none';
    document.getElementById('whoami-more').style.visibility = 'visible';
}

document.getElementById('whoami-more-button').addEventListener('click', showMoreWhoAmi);