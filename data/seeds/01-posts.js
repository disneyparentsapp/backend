
exports.seed = function(knex, Promise) {
  return knex('posts')
    .truncate()
    .then(function () {
      return knex('posts').insert([
        {name: 'Christina', location: 'Haunted Mansion', kids: 2},
        {name: 'Ciaran', location: 'Space Mountain', kids: 3},
        {name: 'Eva', location: 'The Matterhorn', kids: 1}
      ]);
    });
};
