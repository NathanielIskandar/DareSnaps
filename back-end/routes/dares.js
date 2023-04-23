const express = require("express")
const router = express.Router();
const { validationResult } = require('express-validator');
const User = require("../models/User");
const auth = require("../middleware/auth");
const axios = require('axios');
//const user = require("./routes/user");


/**
 * @method - POST
 * @param - /add
 * @description - add item to shopping list
 */
router.get("/daily", auth, async (req, res) => { // protect the route with the auth middleware
    try {
        const response = await axios.get('https://api.truthordarebot.xyz/api/dare');
        const dare = response.data;
        const user = await User.findById(req.user.id);
        user.listOfDares.push(dare.question);
        await user.save();
        res.json({ dare });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch daily dare.' });
    }
});

  module.exports = router;
