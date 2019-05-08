const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();

router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});

router.get("/me", isLoggedIn, (req,res,next) => {
  res.json(req.user)
})

module.exports = router;
