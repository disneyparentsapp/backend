
exports.seed = function(knex, Promise) {
  return knex('posts')
    .truncate()
    .then(function () {
      return knex('posts').insert([
        {location: 'Haunted Mansion', kids: 2},
        {location: 'Space Mountain', kids: 3},
        {location: 'The Matterhorn', kids: 1}
      ]);
    });
};
