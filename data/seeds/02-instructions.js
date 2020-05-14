
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {steps: 'pour cheerios into a bowl', recipe_id: 1},
        {steps: 'pour milk into bowl and enjoy', recipe_id: 1},
        {steps: 'grab two slices of bread', recipe_id: 2},
        {steps: 'spread peanut butter on one slice of the bread', recipe_id: 2},
        {steps: 'spread jelly on the other slice of bread', recipe_id: 2},
        {steps: 'grab both slices and put them together and enjoy', recipe_id: 2},
      ]);
    });
};
