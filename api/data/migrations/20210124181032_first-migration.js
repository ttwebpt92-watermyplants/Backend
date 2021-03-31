exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.string('phone', 11).notNullable()
      users.string('email', 320)
      users.string('firstname', 200)
      users.string('lastname', 200)
    })
    .createTable('plants', (plants) => {
      plants.increments('id')
      plants.string('nickname', 200).notNullable()
      plants.string('species', 200).notNullable()
      plants.integer('h2o_frequency', 320).notNullable()
      plants.string('h2o_unit').notNullable()
      plants.string('image')
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('plants')
  await knex.schema.dropTableIfExists('users')
}
