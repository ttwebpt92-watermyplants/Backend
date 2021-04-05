const db = require('../data/db-config');

function find() {
    return db('users');
}

function findBy(where) {
  return db('users').where(where);
}

function findByUsername(username) {
  return findBy({ username }).first();
}

function add(user) {
  return db("users")
    .insert(user, 'id')
    .then(([id]) => id);
}

function update(id, changes) {
    return db("users")
      .where("id", id)
      .update(changes)
      .then(count => (count > 0 ? get(id) : null));
}

function remove(id) {
	return db("users")
        .where({ id })
        .del();
}

function invalidate(token) {
  return db("storage")
    .insert(token)
}

function findInvalid(token) {
  return db('storage').where(token);
}


module.exports = {
  add,
  find,
  findByUsername,
  remove,
  update,
  invalidate,
  findInvalid
};
