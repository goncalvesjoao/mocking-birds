function sendToConsole(method, title, message) {
  if (process.env.mode === 'test') {
    return false;
  }

  console[method](title + message);

  return false;
}

function log(message) {
  return sendToConsole('log', '', message);
}

function error(message) {
  return sendToConsole('error', 'Error: ', message);
}

function warning(message) {
  return sendToConsole('warn', 'WARNING: ', message);
}

module.exports = {
  log: log,
  error: error,
  warning: warning,
};
