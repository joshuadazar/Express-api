const fs = require('fs');

module.exports = (req, res) => {
  const jsonFile = './data.json';
  const data = fs.readFileSync(jsonFile, 'utf-8');
  const json = JSON.parse(data);

  res.send(json);
};
