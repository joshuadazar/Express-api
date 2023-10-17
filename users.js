const express = require('express');

const users_ = ['joshua', 'maylin', 'joaquin', 'sophia'];

let printUsers = (users = users_) => {
  let htmlUsers = '';
  users.forEach((user) => {
    htmlUsers += `<li> ${user} </li>`;
  });
  return htmlUsers;
};
module.exports = (req, res) => {
  const element = `
    <h1>Hello, users!</h1>
    <ul>
     ${printUsers()}
    </ul>
  `;

  res.send(element);
};
