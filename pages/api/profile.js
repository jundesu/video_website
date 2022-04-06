import {faker} from '@faker-js/faker';

export default function handler(req, res) {
  res.status(200).json(faker.helpers.contextualCard())
}
