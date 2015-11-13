import cors from 'cors';
import bodyParser from 'body-parser';

function applyMiddleware(app, whitelist) {
  app.use(cors({
    origin(origin, callback) {
      callback(null, (whitelist.indexOf(origin) !== -1));
    },
  }));

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));
}

export default applyMiddleware;
