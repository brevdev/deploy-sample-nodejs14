messager = require('./messager/messager.js');

module.exports.handler = (request) => {
  return messager.get();
}
