import * as faker from 'faker';

export default function handler(req, res) {
  const numVideos = 50;
  let videos = []
  for (let i = 0; i < numVideos;i++) {
    videos.push({
      thumbnailUrl: faker.image.image(640, 480),
      title: faker.lorem.sentence(),
      channelId: faker.datatype.uuid(),
      channelTitle: faker.name.title(),
      viewCount: faker.datatype.number(),
      category: faker.commerce.department()
    })
  }

  res.status(200).json(videos)
}
