/**
 * ch08/lec/proj/proj-08-06-2
 * ./src/data/bigList.js
 */

import { faker } from "@faker-js/faker";

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.fullName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}));


export default bigList;