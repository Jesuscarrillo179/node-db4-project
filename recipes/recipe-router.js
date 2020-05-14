const router = require('express').Router()

const Recipes = require('./recipe-model')

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        if(recipes){
            res.status(200).json({data: recipes})
        } else {
            res.status(400).json({ message: "please try again later" })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Server Error"})
    })
})

router.get('/:id/shoppingList', (req, res) => {
    const id = req.params.id

    Recipes.getShoppingList(id)
    .then(recipes => {
        if(recipes){
            res.status(200).json({data: recipes})
        } else {
            res.status(400).json({ message: "please try again later" })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Server Error"})
    })
})

router.get('/:id/instructions', (req, res) => {
    const id = req.params.id

    Recipes.getInstructions(id)
    .then(recipes => {
        if(recipes){
            res.status(200).json({data: recipes})
        } else {
            res.status(400).json({ message: "please try again later" })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Server Error"})
    })
})

module.exports = router