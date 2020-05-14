const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(id){
    return db('recipes').select(
        'ri.id',
        'recipe',
        'ingredient',
        'quantity',
    )
    .join('recipe_ingredients as ri', 'ri.recipe_id', 'recipes.id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .where({ 'ri.recipe_id': id })
}

function getInstructions(id){
    return db('recipes').select(
        'i.id',
        'recipe',
        'steps',
    )
    .join('instructions as i', 'i.recipe_id', 'recipes.id')
    .where({ 'i.recipe_id': id })
}
