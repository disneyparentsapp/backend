const jwt = require('jsonwebtoken');

const secrets = process.env.JWT_SECRET || 'This is a secret.'

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if (token) {
        jwt.verify(token, secrets, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ errorMessage: 'There was an error while authenticating the user.' });
            } else {
                req.decodedJwt = decodedToken;
                console.log('decoded token', req.decodedJwt);
                next();
            }
        });
    } else {
        res.status(401).json({ error: 'Please provide a token to gain access.' });
    }
};