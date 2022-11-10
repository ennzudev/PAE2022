const { ObjectId } = require("mongodb");
const database = require("./../../database/database");

class User {
  async findAll() {
    const db = database();
    const collection = db.collection("users");
    const result = await collection.find({}).toArray();
    return result;
  }

  async findOne(id) {
    const db = database();
    const collection = db.collection("users");
    const result = await collection.findOne({ _id: ObjectId(id) });
    return result;
  }

  async findOneByEmail(email) {
    const db = database();
    const collection = db.collection("users");
    const result = await collection.findOne({ email: email });
    return result;
  }

  async createOne(data) {
    const user = await this.findOneByEmail(data.email);

    if (user) {
      return "user already created";
    } else {
      const db = database();
      const collection = db.collection("users");
      await collection.insertOne(data);
      return "user created";
    }
  }
}

module.exports = User;