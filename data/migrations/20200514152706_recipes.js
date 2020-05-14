
exports.up = function(knex) {
  return knex.schema
.createTable('recipes', tbl => {
    tbl.increments()
    tbl.string('recipe', 100).notNullable()
})
.createTable('instructions', tbl => {
    tbl.increments()
    tbl.string('steps', 100).notNullable()
    tbl.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipes')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
})
.createTable('ingredients', tbl => {
    tbl.increments()
    tbl.string('ingredient', 100).notNullable()
})
.createTable('recipe_ingredients', tbl => {
    tbl.increments()
    tbl.integer('ingredient_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('ingredients')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
    tbl.string('quantity', 50).notNullable()
    tbl.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipes')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
})
};

exports.down = function(knex) {
return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes')
};
