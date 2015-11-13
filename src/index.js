import express from 'express';
import importMocks from './importMocks';
import applyMiddleware from './applyMiddleware';

function MockingBird({ mocksDirectory, whitelist, serverPort = 9090 }) {
  const app = express();

  applyMiddleware(app, whitelist);

  importMocks(mocksDirectory, app);

  app.listen(serverPort);

  return app;
}

export default MockingBird;
