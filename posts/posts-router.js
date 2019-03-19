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

router.get('/posts/:id', (req, res) => {
    const id = req.params.id;

    db('posts')
        .where({ id })
        .then(post => {
            if (post.length > 0) {
                res.status(200).json(post);
            } else {
                res.status(404).json({ errorMessage: 'A post with that ID does not exist.' });
            }
        })
        .catch(() => {
            res.status(500).json({ error: 'Error while retrieving post.' });
        });
});

module.exports = router;