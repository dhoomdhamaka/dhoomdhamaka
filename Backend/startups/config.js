const config = require('config');

module.exports = function() {
    if(!process.env.jwtPrivateKey ){
        console.error('FATAL ERROR: jwtprivateKey is not defined');
        process.exit(1)
    }
}