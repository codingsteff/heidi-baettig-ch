var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PW,
    host: process.env.FTP_HOST,
    port: 21,
    localRoot: __dirname + '/dist',
    remoteRoot: '/httpdocs/',
    include: ['*', '**/*'], // this would upload everything except dot files
    deleteRemote: true,
    forcePasv: true // Passive mode is forced (EPSV command is not sent)
};

// use with promises
ftpDeploy.deploy(config)
    .then(res => console.log('finished:', res))
    .catch(err => console.log(err))