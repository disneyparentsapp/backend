const router = require('express').Router();

const db = require('../data/dbConfig.js');
const restricted = require('../auth/restricted.js');

router.get('/', restricted, (req, res) => {
    db('comments')
        .then(comments => {
            res.status(200).json(comments)
        })
        .catch(() => {
            res.status(500).json({ error: 'Error while retrieving comments.' });
        })
});

module.exports = router;