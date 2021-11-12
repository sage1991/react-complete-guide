import { MongoClient, Document } from "mongodb"
import { NextApiHandler } from "next"


const getMeetups: NextApiHandler = async (request, response) => {
  let client: MongoClient | undefined
  try {
    client = await MongoClient.connect(`${process.env.MONGO_DB_URL}`)
    const meetups = await client.db()
                                .collection("meetups")
                                .find()
                                .toArray()
    response.status(201).json(meetups.map((meetup: Document) => {
      return {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
      }
    }))
  } catch (e) {
    response.status(500).json({})
  } finally {
    client?.close()
  }
}


const postMeetups: NextApiHandler = async (request, response) => {
  let client: MongoClient | undefined
  try {
    const { title, image, address, description } = request.body
    client = await MongoClient.connect(`${process.env.MONGO_DB_URL}`)
    const document = await client.db()
                                 .collection("meetups")
                                 .insertOne({ title, image, address, description })
    response.status(201).json({})
  } catch (e) {
    response.status(500).json({})
  } finally {
    client?.close()
  }
}

const handler: NextApiHandler = (request, response) => {
  if (request.method === "POST") {
    return postMeetups(request, response)
  } else if (request.method === "GET") {
    return getMeetups(request, response)
  }
  response.status(405)
}

export default handler
