const router = require('express').Router();

const db = require('../data/dbConfig.js');
const restricted = require('../auth/restricted.js');

router.get('/', (req, res) => {
    db('comments')
        .then(comments => {
            res.status(200).json(comments)
        })
        .catch(() => {
            res.status(500).json({ error: 'Error while retrieving comments.' });
        });
});

router.get('/:id', (req, res) => {
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

router.post('/', (req, res) => {
    const commentInfo = req.body;

    if (!commentInfo.post_id || !commentInfo.name || !commentInfo.comment)
        return res.status(400).json({ errorMessage: 'Please provide a post id, name and comment.' });

    db('comments')
        .insert(commentInfo)
        .then(ids => {
            const [id] = ids;

            db('comments')
                .where({ id })
                .then(comment => {
                    res.status(201).json(comment);
                });
        })
        .catch(() => {
            res.status(500).json({ error: 'Error while adding comment.' });
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    db('comments')
        .where({ id })
        .del()
        .then(count => {
            if(count > 0) {
                res.status(204).json({ message: 'Comment deleted.' });
            } else {
                res.status(404).json({ errorMessage: 'A comment with that ID does not exist.' });
            }
        })
        .catch(() => {
            res.status(500).json({ error: 'Error while deleting comment.' });
        });
});

router.put('/:id', (req, res) => {
    const commentInfo = req.body;
    const id = req.params.id;

    db('comments')
        .where({ id })
        .update(commentInfo)
        .then(count => {
            if(count > 0) {
                db('comments')
                    .where({ id })
                    .then(comment => {
                        res.status(200).json(comment);
                    })
            } else {
                res.status(404).json({ errorMessage: 'A comment with that ID does not exist.' });
            }
        })
        .catch(() => {
            res.status(500).json({ error: 'Error while updating comment.' });
        });
});

module.exports = router;