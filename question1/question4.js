const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb+srv://devivaraprasad:Dvp@9391@cluster0.syjej.mongodb.net/heroviredmongodbassignment?retryWrites=true&w=majority", (error, client) => { //students - database name
    if (error) {
        return console.log("Problem With MongoDb Connection");
    }
    console.log("Connected To MongoDB Successfully");

    //Creating DataBase Students
    const db = client.db("heroviredassessments");


    //Creating Collection In MongoDB Using insertOne
    db.collection("Task_1_Data").insertOne(             //Task_1_Data is collection name in database
            {
                Id:812,
                Email:'e@e.com',
                Name: "Rick",
                Submission: 1,
                Grade: "NA"
            },

        (error, result) => {
            if (error) {
                console.log("Problem With Insertion", error)
            }

            console.log(JSON.stringify(result.ops, undefined, 2));
        });
    client.close()  //Closing The Connection
});