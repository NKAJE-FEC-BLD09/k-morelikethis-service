const faker = require('faker');

const starsSeeder = () => {
  const count = Math.floor((Math.random() * 3) + 1);
  let stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(faker.fake('{{name.firstName}} {{name.lastName}}'));
  }
  return stars;
}

module.exports = starsSeeder;