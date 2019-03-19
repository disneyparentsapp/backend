const router = require('express').Router();

const db = require('../data/dbConfig.js');

router.get('/posts', (req, res) => {
    db('posts')
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(() => {
            res.status(500).json({ error: 'The posts could not be retrieved.' });
        })
});

module.exports = router;