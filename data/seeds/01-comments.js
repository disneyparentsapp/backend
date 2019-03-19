
exports.seed = function(knex, Promise) {
  return knex('comments')
    .truncate()
    .then(function () {
      return knex('comments').insert([
        {post_id: 1, name: 'Mickey', comment: 'Dance the hempen jig Jack Tar starboard plunder weigh anchor coffer boom doubloon belay Shiver me timbers. Snow bowsprit grog blossom bring a spring upon her cable ahoy capstan marooned execution dock keelhaul Jack Tar.'},
        {post_id: 1, name: 'Minnie', comment: 'Shiver me timbers Buccaneer hail-shot chase guns draft boatswain Gold Road execution dock nipper scuttle.'},
        {post_id: 2, name: 'Donald', comment: 'Brethren of the Coast prow marooned galleon gunwalls strike colors scurvy belaying pin tackle sloop. Letter of Marque warp gun chantey cog Gold Road Nelsons folly careen lanyard heave to.'},
        {post_id: 2, name: 'Daisy', comment: 'Mutiny hulk Brethren of the Coast wherry bring a spring upon her cable salmagundi Sink me chase guns reef fore.'},
        {post_id: 3, name: 'Goofy', comment: 'Wench run a rig matey pinnace spirits code of conduct ballast boom splice the main brace Privateer. Jack aft marooned stern tackle rum no prey, no pay haul wind overhaul nipperkin. '},
        {post_id: 3, name: 'Pluto', comment: 'Yellow Jack American Main Letter of Marque nipper ahoy Gold Road loaded to the gunwalls Privateer trysail main sheet.'},
      ]);
    });
};
