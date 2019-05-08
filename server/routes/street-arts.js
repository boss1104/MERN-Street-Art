const express = require('express');
const StreetArt = require('../models/StreetArt')

const router = express.Router();

router.get('/', (req, res, next) => {
  StreetArt.find()
    .then(Street => {
      res.json(Street);
    })
    .catch(err => next(err))
});

module.exports = router;