const mongoose = require("mongoose");
const crypto = require("crypto-js");

const userSchema = mongoose.Schema({
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
  nickname: {
    type: String,
  },
  phone: {
    type: String,
  },
  // TODO: 이미지
  // profileImage: {
  //   type: String,
  // },
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  authLevel: {
    type: Number,
  },
  status: {
    type: Number,
  },
});

// 비밀번호 암호화
userSchema.pre("save", function (next) {
  let user = this;

  if (this.password) {
    const hash = crypto.SHA256(this.password, process.env.SALT).toString();
    this.password = hash;
    next();
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
