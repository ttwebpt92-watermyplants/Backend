exports.seed = function(knex) {
    // Inserts seed entries
        return knex('users').insert([
          {id: 1, username: 'a1stein', password: 'password', phone: '3344449088', email: "test@abc.com", firstname: 'Albert', lastname: 'Einstein'},
        ])
      .then(() => {
        return knex('plants').insert([
          {id: 1, nickname: 'Pipa', species: "Bird of Paradise", h2o_frequency: 2, h2o_unit: 'days', image: 'https://www.gardeningknowhow.com/wp-content/uploads/2007/04/bird-of-paradise-1024x695.jpg'},
        ]);
      })
      .then(() => {
        return knex('storage').insert([
          {id: 0, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbnJ5IiwiaWQiOjI0LCJpYXQiOjE2MTc1ODYwMDQsImV4cCI6MTYxNzY3MjQwNH0.mqj0cOHAUONq-Mp5u8qYsX6O7HbvvRxweFsGcD6MtqQ'},
        ]);
    });
};
