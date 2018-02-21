const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{
    if(err){
       return console.log('Unable to connect DB',err);
    }

    console.log('Connected to DB');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text:'Something new',
        completed: false
    },(err,result)=>{
        if(err){
            return console.log('Unsuccessfull insert',err);
        }
        console.log('Successfull insert');
    });

    db.collection('Users').insertOne({
        name:'Zsombor',
        age: 21,
        location: '1322'
    },(err,result)=>{
        if(err){
            return console.log('Unsuccessfull insert',err);
        }
        console.log('Successfull insert');
    });
    client.close();
})