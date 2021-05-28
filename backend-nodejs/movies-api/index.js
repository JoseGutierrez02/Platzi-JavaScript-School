const express = require('express');
const morgan = require('morgan');
const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies');

const { logErrors, wrapError, errorHandler } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body-parser middleware
app.use(express.json());
// http requests logger middleware
app.use(morgan('tiny'))

// routes
moviesApi(app);

// not found middleware
app.use(notFoundHandler);

// error-handler middleware
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server listening at http://localhost:${config.port}`);
});
