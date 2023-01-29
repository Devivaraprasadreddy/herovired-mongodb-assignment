const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/heroviredassessments", (error, client) => { //students - database name
    if (error) {
        return console.log("Problem With MongoDb Connection");
    }
    console.log("Connected To MongoDB Successfully");

    //Creating DataBase Students
    const db = client.db("heroviredassessments");


    //Creating Collection In MongoDB Using insertMany
    db.collection("Task_1_Data").insertMany(             //Task_1_Data is collection name in database
        [
            {
                Id:101,
                Email:'a@a.com',
                Name: "Alex",
                Department:'CSE',
                Submission: 1,
                Grade: "NA"
            },
            {
                Id:203,
                Email:'b@a.com',
                Name: "John",
                Department:'CIVIL',
                Submission: 0,
                Grade: "NA"
            },
            {
                Id:305,
                Email:'c@c.com',
                Name: "Sam",
                Department:'CSE',
                Submission: 0,
                Grade: "NA"
            },
            {
                Id:719,
                Email:'d@d.com',
                Name: "Rob",
                Department:'ELECTRONICS',
                Submission: 1,
                Grade: "NA"
            }
        ],

        (error, result) => {
            if (error) {
                console.log("Problem With Insertion", error)
            }

            console.log(JSON.stringify(result.ops, undefined, 2));
        });
    client.close()  //Closing The Connection
});