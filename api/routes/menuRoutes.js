const express = require("express");
const Menu = require("../models/Menu")
const router = express.Router();

const menuController = require('../controllers/menuControllers')

// get all menu item
router.get("/", menuController.getAllMenuItems)
// post a menu item
router.post('/', menuController.postMenuItem)
// deleted a menu item
router.delete('/:id', menuController.deleteMenuItem);
//GET single menu item
 router.get('/:id', menuController.singleMenuItem);
//  updated menu
router.patch('/:id', menuController.updateMenuItem)

module.exports = router;
