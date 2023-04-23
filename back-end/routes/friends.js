const express = require("express")
const router = express.Router();
const { validationResult } = require('express-validator');
const User = require("../models/User");
const auth = require("../middleware/auth");
//const user = require("./routes/user");


/**
 * @method - POST
 * @param - /add
 * @description - add item to shopping list
 */

router.post("/add-friend", auth, async (req, res) => {
    const user = await User.findById(req.user.id);
    const friend = req.body.friend;
    // Add the item to the shopping list
    user.friendsList.push(friend);
    user.save();

    // Return the updated shopping list as response
    return res.status(200).json(user.friendsList);
    }
)

router.get("/remove-friend", auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);

      // Return the friends list
      const friendToRemove  = req.body.friend;
      user.friendsList = user.friendsList.filter(friend => friend !== friendToRemove )
      user.save();
      return res.status(200).json(user.friendsList);
    } catch (e) {
      res.send({ message: "Error in Fetching shopping list" });
    }
  });
  module.exports = router;
