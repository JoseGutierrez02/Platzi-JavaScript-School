const express = require('express');
const helmet = require('helmet');
const app = express();
const { config } = require('./config');
const moviesApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');
const authApi = require('./routes/auth');
const {
  logErrors,
  wrapError,
  errorHandler,
} = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body-parser middleware
app.use(express.json());
// security middleware
app.use(helmet());

// routes
authApi(app);
moviesApi(app);
userMoviesApi(app);

// not found handler
app.use(notFoundHandler);

// error-handling middleware
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server listening at http://localhost:${config.port}`);
});
