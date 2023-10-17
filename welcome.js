const routes = ['/api/hello', '/api/users', '/sw', '/data', '/rnd'];

module.exports = (req, res) => {
  let htmlElement = '';
  routes.forEach((route) => {
    htmlElement += `<li>${route}</li>`;
  });

  const list = `<ul>${htmlElement}</ul>`;
  res.send(list);
};
