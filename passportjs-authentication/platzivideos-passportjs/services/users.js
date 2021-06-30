const MongoLib = require('../lib/mongo');
const bcryptjs = require('bcryptjs');

class UsersService {
  constructor() {
    this.collection = 'users';
    this.mongoDB = new MongoLib();
  }

  async getUser({ email }) {
    const [user] = await this.mongoDB.getAll(this.collection, { email });
    return user;
  }

  async createUser({ user }) {
    const { name, email, password } = user;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const createdUserId = await this.mongoDB.create(this.collection, {
      name,
      email,
      hashedPassword,
    });

    return createdUserId;
  }
}

module.exports = UsersService;
