const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const bcryptjs = require('bcryptjs');

const UsersService = require('../../../services/users');

passport.use(
  new BasicStrategy(async (email, password, cb) => {
    const userServices = new UsersService();

    try {
      const user = await userServices.getUser({ email });

      if (!user) {
        return cb(boom.unauthorized(), false);
      }

      if (!(await bcryptjs.compare(password, user.password))) {
        return cb(boom.unauthorized(), false);
      }

      delete user.password;

      return cb(null, user);
    } catch (error) {
      return cb(error);
    }
  })
);
