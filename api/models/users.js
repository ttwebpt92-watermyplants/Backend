const db = require('../data/db-config');

function find() {
    return db('users');
}

function findByUsername(username) {
    return db('users')
      .where(username);
}

function add(user) {
  return db("users")
    .insert(user, 'id')
    .then(([id]) => id);
}

function findById(id) {
    return findBy(id)
      .first();
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
module.exports = {
  add,
  find,
  findByUsername,
  findById,
  remove,
  update
};
