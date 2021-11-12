import { MongoClient } from "mongodb"
import { NextApiHandler } from "next"


const getMeetupIds: NextApiHandler = async (request, response) => {
  let client: MongoClient | undefined
  try {
    client = await MongoClient.connect(`${process.env.MONGO_DB_URL}`)
    const meetups = await client.db()
                                .collection("meetups")
                                // @ts-ignore
                                .find({}, { _id: 1 })
                                .toArray()
    response.status(201).json(meetups.map((meetup) => meetup._id.toString()))
  } catch (e) {
    response.status(500).json({})
  } finally {
    client?.close()
  }
}

const handler: NextApiHandler = (request, response) => {
  if (request.method === "GET") {
    return getMeetupIds(request, response)
  }
  response.status(405)
}

export default handler
