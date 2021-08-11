const passport = require('passport');
const axios = require('axios');
const boom = require('@hapi/boom');
const { Strategy: FacebookStrategy } = require('passport-facebook');
const { config } = require('../../../config');

passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebookClientId,
      clientSecret: config.facebookClientSecret,
      callbackURL: '/auth/facebook/callback',
    },
    async (accessToken, refreshToken, profile, cb) => {
      const { data, status } = axios({
        url: `${config.apiUrl}/sign-provider`,
        method: 'post',
        data: {
          name: profile.name,
          email: profile.emails[0].value,
          password: profile.id,
          apiKeyToken: config.apiKeyToken,
        },
      });

      if (!data || status !== 200) {
        return cb(boom.unauthorized());
      }

      return cb(null, data);
    }
  )
);
