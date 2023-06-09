const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  // Add more fields for information on the user.
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }, 
  friendsList: {
    type: Array,
    required: false,
    default: []
  },
  listOfDares: {
    type: Array,
    required: false,
    default: []
  },
  images: [String],
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
