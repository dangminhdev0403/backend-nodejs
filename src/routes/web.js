const express = require('express');
const app = express();
const router = express.Router();
const { getHomePage , getEngPage} = require('../controllers/HomeController');



router.get('/1', getHomePage)


router.get('/abc', getEngPage)

module.exports = router;