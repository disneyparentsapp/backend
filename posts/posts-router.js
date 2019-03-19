const router = require('express').Router();

const db = require('../data/dbConfig.js');
const restricted = require('../auth/restricted.js');

router.get('/', restricted, (req, res) => {
    db('posts')
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(() => {
            res.status(500).json({ error: 'Error while retrieving posts.' });
        });
});

router.get('/:id', restricted, (req, res) => {
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

router.post('/', (req, res) => {
    const postInfo = req.body;

    if (!postInfo.name || !postInfo.location || !postInfo.kids)
        return res.status(400).json({ errorMessage: 'Please provide a name, location and number of kids for the post.' });

    db('posts')
        .insert(postInfo)
        .then(ids => {
            const [id] = ids;

            db('posts')
                .where({ id })
                .then(post => {
                    res.status(201).json(post);
                });
        })
        .catch(() => {
            res.status(500).json({ error: 'Error while adding the post.' });
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    db('posts')
        .where({ id })
        .del()
        .then(count => {
            if(count > 0) {
                res.status(204).json({ message: 'Post deleted.' });
            } else {
                res.status(404).json({ errorMessage: 'A post with that ID does not exist.' });
            }
        })
        .catch(() => {
            res.status(500).json({ error: 'Error while deleting post.' });
        });
});

router.put('/:id', (req, res) => {
    const postInfo = req.body;
    const id = req.params.id;

    db('posts')
        .where({ id })
        .update(postInfo)
        .then(count => {
            if(count > 0) {
                db('posts')
                    .where({ id })
                    .then(post => {
                        res.status(200).json(post);
                    })
            } else {
                res.status(404).json({ errorMessage: 'A post with that ID does not exist.' });
            }
        })
        .catch(() => {
            res.status(500).json({ error: 'Error while updating the post.' });
        });
});

module.exports = router;