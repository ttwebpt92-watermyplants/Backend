const db = require('../data/db-config');

function findBy(token) {
    return db('storage').where(token);
}
function add(token) {
    return db("storage")
      .insert(token, 'id')
      .then(([id]) => id);
  }
module.exports = {
    findBy,
    add
}
