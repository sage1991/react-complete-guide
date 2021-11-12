import { MongoClient, ObjectId } from "mongodb"
import { NextApiHandler } from "next"


const getMeetup: NextApiHandler = async (request, response) => {
  let client: MongoClient | undefined
  try {
    const { id } = request.query
    client = await MongoClient.connect(`${process.env.MONGO_DB_URL}`)
    const meetup = await client.db()
                               .collection("meetups")
                               .findOne({ _id: new ObjectId(`${id}`) })
    if (meetup) {
      response
        .status(201)
        .json({
          id: meetup._id.toString(),
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          description: meetup.description
        })
    } else {
      response.status(404)
    }

  } catch (e) {
    response.status(500).json({})
  } finally {
    client?.close()
  }
}

const handler: NextApiHandler = (request, response) => {
  if (request.method === "GET") {
    return getMeetup(request, response)
  }
  response.status(405)
}

export default handler
