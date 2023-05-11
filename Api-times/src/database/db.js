const mongoose = require('mongoose'); 
async function ConnectDatabase(){
  await  mongoose.connect("mongodb+srv://dmls:07081998David@cluster0.i3junvb.mongodb.net/?retryWrites=true&w=majority")
}
module.exports = ConnectDatabase;