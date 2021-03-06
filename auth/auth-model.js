const db = require('../data/dbConfig.js');

module.exports = {
    add,
    findBy
};

function add(user) {
    return db('users')
        .insert(user)
        .into('users');
}

function findBy(filter) {
    return db('users').where(filter);
}

