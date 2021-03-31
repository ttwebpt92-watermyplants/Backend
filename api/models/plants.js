const db = require('../data/db-config');

function find() {
  return db('plants')
}

function findById(id) {
  return db('plants')
    .where({ id }).first()
}

function add(plant) {
  return db('plants')
    .insert(plant, 'id')
    .then(([id]) => findById(id));
}

function update(id, changes) {
    return db("plants")
      .where("id", id)
      .update(changes)
      .then(count => (count > 0 ? get(id) : null));
}

function remove(id) {
	return db('plants').where({ id }).delete()
}

module.exports = {
  find,
  add,
  findById,
  remove
};
