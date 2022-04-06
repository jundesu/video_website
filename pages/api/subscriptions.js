import {faker} from '@faker-js/faker';

export default function handler(req, res) {
  const numSubscriptions = 30;
  const subscriptions = []
  for (let i = 0; i < numSubscriptions; i++){
    subscriptions.push({
      channelId: faker.datatype.uuid(),
      channelTitle: faker.name.title(),
      channelIcon: faker.image.image(640, 480),
      unreadCount: faker.datatype.number(10)
    })
  }

  res.status(200).json(subscriptions)
}
