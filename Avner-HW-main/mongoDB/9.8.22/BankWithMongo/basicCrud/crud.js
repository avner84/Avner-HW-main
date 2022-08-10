const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://avner84:avner300@cluster0.gcpl9ub.mongodb.net/?retryWrites=true&w=majority";


async function main() {
    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        await client.connect();
        const db = client.db("AvnerDB");
        const collection = db.collection("col1");

        //CREATE 
        //await collection.insertOne({ name: "Avner" });
        //await collection.insertMany([{ name: "Yossi" }, { name: "Moshe" }]);

        //READ
        // const readResults = await collection.find({}).toArray();
        // console.log('readResults :', readResults);

        //DELETE
        // await collection.deleteOne({});
        // await collection.deleteMany({name: "Moshe"});

        //UPDATE
        await collection.updateOne({ name: "Avner" }, { $set: { age: 38 } })
        // await collection.updateMany()

        await client.close();
    }
    catch (error) {
        console.log('error :', error);
    }
}

main();