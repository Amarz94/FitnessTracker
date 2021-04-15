const router = require("express").Router();
const path = require("path");


  //connects to /public/index.html
  router.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  //connects to /public/exercise.html
  router.get('/exercise', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });
  //connects to /public/stats.html
  router.get('/stats', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/stats.html'));
  });
  
  module.exports = router;