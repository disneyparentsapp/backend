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
        });
});

router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;

    db('comments')
        .where({ id })
        .then(comment => {
            if (comment.length > 0) {
                res.status(200).json(comment);
            } else {
                res.status(404).json({ errorMessage: 'A comment with that ID does not exist.' });
            }
        })
        .catch(() => {
            res.status(500).json({ error: 'Error while retrieving comment.' });
        });
});

module.exports = router;