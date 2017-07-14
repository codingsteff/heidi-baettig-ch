import '../node_modules/normalize.css/normalize.css';
import '../node_modules/milligram/dist/milligram.css';
import './fontello.css';
import './index.scss';
// Kopien für /dist
require("file-loader?name=web.config!./web.config");
require("file-loader?name=favicon.ico!./favicon.ico");

document.getElementById('profile').src = require('./img/profile.png');
document.getElementById("year").innerHTML = (new Date()).getFullYear();