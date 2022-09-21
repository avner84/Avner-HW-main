const { MongoClient, ServerApiVersion } = require('mongodb');

const Sisma = "mira2022";
const uri = `mongodb+srv://avnerM84:mira2022@cluster0.iluwtme.mongodb.net/?retryWrites=true&w=majority`;


async function createData(user) {
    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        await client.connect();
        const db = client.db("My-Basta");
        const collection = db.collection("Users-Collection");


        //CREATE 
        await collection.insertOne({ fname : user.fname, lname : user.lname, email : user.email, pass: user.pass });
        // await collection.insertMany([{ name: "Yossi" }, { name: "Moshe" }]);

        //READ
        // const readResults = await collection.find({}).toArray();
        // console.log('readResults :', readResults);

        //DELETE
        // await collection.deleteOne({});
        // await collection.deleteMany({name: "Moshe"});

        //UPDATE
        // await collection.updateOne({ name: "Avner" }, { $set: { age: 38 } })
        // await collection.updateMany()

        await client.close();
    }
    catch (error) {
        console.log('error :', error);
    }
}


async function checkEmailNotExist(emailToCheck){
    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        await client.connect();
        const db = client.db("My-Basta");
        const collection = db.collection("Users-Collection");


        const doesEmailExist = await collection.findOne({email: emailToCheck})
        await client.close();
        
        if (doesEmailExist){
           return true;
        }

        else {
            return false;
        }

        
    }
    catch (error) {
        console.log('error :', error);
    }
}


module.exports = {createData, checkEmailNotExist};