
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bands', function(table){
    table.increments();
    table.string('name');
    table.integer('num_of_members');
    table.string('origin_location');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bands');
};
