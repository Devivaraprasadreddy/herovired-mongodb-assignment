const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb+srv://devivaraprasad:Dvp@9391@cluster0.syjej.mongodb.net/heroviredmongodbassignment?retryWrites=true&w=majority", (error, client) => { //students - database name
    if (error) {
        return console.log("Problem With MongoDb Connection");
    }
    console.log("Connected To MongoDB Successfully");

    //Creating DataBase 
    const db = client.db("heroviredmongodbassessment");

//Fetching Data From MongoDB Database
db.collection("Task_1_Data").find({Submission: 1}).toArray().then((result) => {
    console.log("Details Found"),
    console.log(JSON.stringify(result, undefined, 2));
});
    (error => {
        {
            console.log("Unable To Fetch The Data", error)
        }
    });
client.close()  //Closing The Connection
});