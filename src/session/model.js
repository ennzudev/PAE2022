const database = require("./../../database/database");
const jwt = require("jsonwebtoken");

class Session {
  async createOne(data) {
    return jwt.sign(
      { email: data.email, password: data.password },
      process.env.TOKEN_SECRET
    );
  }

  async validateOne(authHeader) {
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return false;
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return false;
    });
    return true;
  }
}

module.exports = Session;