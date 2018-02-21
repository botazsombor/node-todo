const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{
    if(err){
       return console.log('Unable to connect DB',err);
    }

    console.log('Connected to DB');
    const db = client.db('TodoApp');
    console.log(db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
        console.log(docs);
    }).catch((err)=>{
        console.log('Error fetching data');
    }));
    client.close();
})