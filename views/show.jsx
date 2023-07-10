const router = require('express').Router()
const Bread = require('../models/bread')

// GET all bread
router.get('/', (req, res) => {
    res.render('index', { breads: Bread })
})

// GET bread by index
router.get('/:index', (req, res) => {
    const { index } = req.params
    res.send(Bread[index])
})

module.exports = router
const React = require('react')
const Default = require('./layouts/default')

function Show ({bread}) {
  
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <img src={bread.image} alt={bread.name}></img>
        <p>
            And it
            {
                bread.hasGluten ? <span> does </span> : <span> does not </span>
            }
            have gluten
        </p>
      </Default>
    )
}

module.exports = Show