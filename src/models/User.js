const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.pre("save", (next) => {
//   bcrypt
//     .genSalt(10)
//     .then((salts) => {
//       bcrypt
//         .hash(this.password, salts)
//         .then((hash) => {
//           this.password = hash;
//           next();
//         })
//         .catch((error) => next(error));
//     })
//     .catch((error) => next(error));
// });

module.exports = model("User", userSchema);
