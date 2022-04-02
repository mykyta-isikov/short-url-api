const validUrl = require('valid-url');

module.exports = (req, res, next) => {

    if (validUrl.isWebUri(req.body.url)) {
        next();
    } else {
        res.status(400).end();
    }
    
}