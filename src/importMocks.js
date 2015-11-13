import fs from 'fs-extra';

function importMocks(_directory, app) {
  let directory = _directory;

  if (!directory.endsWith('/')) {
    directory += '/';
  }

  fs.readdirSync(directory).forEach((fileName) => {
    const file = fs.lstatSync(directory + fileName);

    if (file.isDirectory()) {
      return importMocks(directory + fileName, app);
    }

    if (fileName === 'index.js') {
      return false;
    }

    return require(process.cwd() + '/' + directory + fileName)(app);
  });
}

export default importMocks;
