
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient: 'milk'},
        { ingredient: 'cheerios'},
        { ingredient: 'peanut butter'},
        { ingredient: 'jelly'},
        { ingredient: 'bread'},
      ]);
    });
};
