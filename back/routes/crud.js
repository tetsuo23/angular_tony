const express = require('express');

const router = express.Router();

router.post('', (req, res, next) => {
  console.log('backend: create');
  res.status(200).json({
    //res.status définit le code de retour du message. 
    message: 'backend create status 200'
  });

})

router.get('', (req, res, next) => {
  console.log('backend: get');
  res.status(200).json({
    message: 'backend create status 200'
  });

})

router.put('', (req, res, next) => {
  console.log('backend: update');
  res.status(200).json({
    message: 'backend create status 200'
  });

})

router.delete('', (req, res, next) => {
  console.log('backend: delete');
  res.status(200).json({
    message: 'backend create status 200'
  });

})

module.exports = router;
