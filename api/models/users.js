const db = require('../data/db-config');

function find() {

    return db('users')
      .select('*')
}

function findBy(filter) {

    return db('users')
      .select('*')
      .where(filter)
}

function findById(id) {

    return db('users')
      .select('*')
      .where({ id })
      .first()
}

function add(user) {
    return db("users")
      .insert(user, 'id')
      .then(([id]) => findById(id));
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
        .del()
}
module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};
