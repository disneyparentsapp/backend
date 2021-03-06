
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', posts => {
        posts.increments();

        posts
            .string('name', 255)
            .notNullable();

        posts
            .string('location', 255)
            .notNullable();
        
        posts
            .integer('kids')
            .notNullable();

        posts
            .timestamp('timestamp')
            .defaultTo(knex.fn.now())
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posts');
};
