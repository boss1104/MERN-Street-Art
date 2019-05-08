const express = require('express');
const StreetArt = require('../models/StreetArt');
const Visit = require('../models/Visit');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();

// Route protected for logged in user
router.get('/my-visits', isLoggedIn, (req, res, next) => {
  Visit.find({_user: req.user._id}) //Porque queremos o user com aquele id específico
  .populate("_streetArt") //O populate vai substituir o ObjectId do _streetArt para que sejam apresentadas as features que constituem o _streetArt - a sua lat, a sua lng, e a sua picture. Assim, percebemos que aquele user específico entrou dentro de uma ou várias _streetArt.
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  })
});

module.exports = router;