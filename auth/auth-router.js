const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../auth/auth-model.js');

router.get('/', (req, res) => {
    res.send('Testing');
});

router.post('/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);

    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Error registering the user.' });
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ 
                    message: `Welcome to Disney Parents, ${user.username}!`,
                    token
                });
            } else {
                res.status(401).json({ errorMessage: 'Please provide the proper credentials.' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Error logging in.' });
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        password: user.password
    };

    const secrets = process.env.JWT_SECRET || 'This is a secret.'

    const options = {
        expiresIn: '1d'
    };

    return jwt.sign(payload, secrets, options);
}

module.exports = router;