const mongoose = require('mongoose')
const dbConfig  = require('./dbConfig')

const connectDB = async()=>{
    try{
        const connection = mongoose.connect(dbConfig.database,{
            useNewUrlParser: true,
        })
        console.log('Mongodb connected' + connection)

    }catch(e){
        console.log(e);
        process.exit(1);
    }
}

module.exports = connectDB 