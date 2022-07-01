const express = require('express');
const router = express.Router();
const dbUser = require('../model/Register')
const dbProduct = require('../model/Product')
const { ensureAuthenticated, forwardAuthenticated } = require('../middleware/auth')



// Welcome Page
router.get('/', (req, res) => {
  const promise = dbProduct.find({})
  promise.then(data => {
    res.render('index', {
      title: 'OLX.uz',
      db: data
    })
  })
    .catch(err => {
      console.log(err);
    })
});

// Dashboard
router.get('/user', ensureAuthenticated, (req, res) =>
  res.render('user', {
    title: 'User ',
    data: req.user
  })
);

router.get('/otabek', (req, res) => {
  const promise = dbProduct.find({})
    .then(data => {
      res.render('otabek', {
        title: 'ADMIN PANEL',
        db: data
      })
    }).catch(error => {
      console.log(error);
    })
})
router.get('/delete/:id', async (req, res) => {
  try {
    const id = { _id: req.params.id }
    await dbProduct.findByIdAndDelete(id)
    res.redirect('/otabek')
  } catch (error) {
    console.log(error);
  }
})

router.get('/list', (req, res) => {
  const promise = dbProduct.find({})
  
    .then(data => {
      let curent = data.length
      res.render('list', {
        title: 'Filter bo\'limi',
        db: data,
        current : curent
      })
    }).catch(error => {
      console.log(error);
    })
})



module.exports = router;
