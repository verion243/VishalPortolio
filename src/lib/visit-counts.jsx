import { MongoClient } from "mongodb";
import 'dotenv/config';

const client = new MongoClient(process.env.MONGO_URI);

export async function updateAndGetVisitCounts () {
    

    var visitCounts = 1000;
    try {
      await client.connect();
      const doc = await client.db("Portfolio").collection("visits").findOneAndUpdate(
          {name: "counts"},
          {$inc: {"value": 1}},
          {
            upsert: true,
            returnDocument: "after"
          }
      );
      visitCounts = doc.value;
      console.log("Visited");
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  
    return visitCounts;
  
  }