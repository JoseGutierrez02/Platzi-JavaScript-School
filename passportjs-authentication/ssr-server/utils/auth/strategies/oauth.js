const passport = require('passport');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const boom = require('@hapi/boom');
const { OAuth2Strategy } = require('passport-oauth');
const { config } = require('../../../config');

const GOOGLE_AUTHORIZATION_URL = 'https://accounts.google.com/o/oauth2/auth';
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_USERINFO_URL = 'https://openidconnect.googleapis.com/v1/userinfo';

const oAuth2Strategy = new OAuth2Strategy(
  {
    authorizationURL: GOOGLE_AUTHORIZATION_URL,
    tokenURL: GOOGLE_TOKEN_URL,
    clientID: config.googleClientId,
    clientSecret: config.googleClientSecret,
    callbackURL: '/auth/google-oauth/callback',
  },
  async (accessToken, refreshToken, params, profile, cb) => {
    console.log(params);

    const profileUser = jwt.decode(params.id_token);

    // console.log(profileUser);

    const { data, status } = await axios({
      url: `${config.apiUrl}/api/auth/sign-provider`,
      method: 'post',
      data: {
        name: profileUser.name,
        email: profileUser.email,
        password: profileUser.sub,
        apiKeyToken: config.apiKeyToken,
      },
    });

    if (!data || status !== 200) {
      return cb(boom.unauthorized(), false);
    }

    return cb(null, data);
  }
);

passport.use('google-oauth', oAuth2Strategy);
