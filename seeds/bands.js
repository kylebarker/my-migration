
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bands').del()
    .then(function () {
      // Inserts seed entries
      return knex('bands').insert([
        {name: 'The Strokes', num_of_members: 5, origin_location: 'New York City, New York'},
        {name: 'The White Stripes', num_of_members: 2, origin_location: 'Detroit, Michigan'},
        {name: 'Alabama Shakes', num_of_members: 4, origin_location: 'Athens, Alabama'},
        {name: 'Spoon', num_of_members: 4, origin_location: 'Austin, Texas'}
      ]);
    });
};
