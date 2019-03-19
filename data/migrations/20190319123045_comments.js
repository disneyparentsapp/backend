
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', function(tbl) {
        tbl.increments();

        tbl
            .integer('post_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('posts')

        tbl
            .string('name', 128)
            .notNullable();

        tbl
            .string('comment', 1000)
            .notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comments');
};
