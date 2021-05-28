const express = require('express');
const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies');

const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');

// body-parser middleware
app.use(express.json());

moviesApi(app);

// error-handler middleware
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server listening at http://localhost:${config.port}`);
});
