const { MongoClient, ServerApiVersion } = require('mongodb');

const Sisma = "mira2022";
const uri = `mongodb+srv://avnerM84:mira2022@cluster0.iluwtme.mongodb.net/?retryWrites=true&w=majority`;


async function createData(user) {
    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        await client.connect();
        const db = client.db("My-Basta");
        const collection = db.collection("Users-Collection");
      
        await collection.insertOne({name: { fname : user.name.fname, lname : user.name.lname}, email : user.email, pass: user.pass, active: user.active, token: user.token});
   
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