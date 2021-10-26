import * as faker from 'faker';

export default function handler(req, res) {
  const numSubscriptions = 50;
  const subscriptions = []
  for (let i = 0; i < numSubscriptions; i++){
    subscriptions.push({
      channelId: faker.datatype.uuid(),
      channelTitle: faker.name.title(),
      unreadCount: faker.datatype.number(10)
    })
  }

  res.status(200).json(subscriptions)
}
